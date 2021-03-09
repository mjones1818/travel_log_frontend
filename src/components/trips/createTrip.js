import { DirectUpload } from 'activestorage'
import React, { Component} from 'react'
import {connect} from 'react-redux'
import {tripAction, fetchTrips, trip, uploadFile} from '../../actions/trips'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'

class CreateTrip extends Component {
  state = {
    country: '',
    text: '',
    images: []
  }

  handleOnChange = event => {
    console.log(event.target.value)
    if (event.target.name === 'images') {
      this.setState({
        [event.target.name]: [Object.values(event.target.files)]
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  

  handleSubmit = event => {
    event.preventDefault()
    let data = {
      trip: {
        country: this.state.country,
        text: this.state.text
      },
      user: this.props.currentUser
    
    }

    fetch('http://localhost:3000/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(resp => this.uploadFiles(this.state.images,resp))
  }

  uploadFiles = (files, user) => {
    let last = false
    
    const iterate = (file, index, files) => {
      
      if (index === files.length-1) {
        last = true
      }
      
      this.props.uploadFile(file,user,last)
    }
    files[0].forEach(iterate)
  }

  // logBlobs = (file,user) => {
  //   const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')

  //   upload.create((error, blob) => {
  //     console.log('STARTING',blob)
  //     if (!error) {
  //       console.log('no error', blob)
  //       this.setState({
  //         ...this.state,
  //         images: [...this.state.images, blob.signed_id]
  //       },console.log(this.state))
  //     }
  //   })
  // }

  // uploadFile = (file,user,last) => {
  //   const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    
  //   upload.create((error, blob) => {
  //     console.log('STARTING',blob)
  //     if (error) {
  //       console.log(error,'error')
  //     } else {
  //       console.log('no error')
  //       fetch(`http://localhost:3000/trips/${user.id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //         },
  //         body: JSON.stringify({images: blob.signed_id})
  //       })
  //       .then(resp => resp.json())
  //       .then(data => {
  //         last ? this.props.trip(data) : console.log('false')
  //       })
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>Country:</label>
          <input type='text' name='country' value={this.state.country} onChange={this.handleOnChange}></input>
          <br></br>
          <label>description:</label>
          <textarea name='text' value={this.state.text} onChange={this.handleOnChange}></textarea>
          <br></br>
          <label>Upload your pics</label>
          <input type='file' name='images' multiple onChange={this.handleOnChange}></input>
          <br></br>
          <input type='submit' value='Upload Trip'></input>
        </form> */}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name='country' placeholder="Enter Country name" value={this.state.country} onChange={this.handleOnChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name='text' value={this.state.text} onChange={this.handleOnChange}/>
          </Form.Group>
          <Form.Group>
            <Form.File name='images' id="exampleFormControlFile1" label="Upload Photos" multiple onChange={this.handleOnChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, {tripAction, trip, uploadFile})(CreateTrip)