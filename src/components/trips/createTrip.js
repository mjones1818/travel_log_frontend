import React, { Component} from 'react'
import {connect} from 'react-redux'

class CreateTrip extends Component {

  state = {
    country: '',
    text: '',
    images: []
  }

  handleOnChange = event => {
    if (event.target.name === 'images') {
      this.setState({
        [event.target.name]: event.target.files[0]
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
        text: this.state.country
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
  .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Country:</label>
          <input type='text' name='country' value={this.state.country} onChange={this.handleOnChange}></input>
          <br></br>
          <label>description:</label>
          <textarea name='text' value={this.state.text} onChange={this.handleOnChange}></textarea>
          <br></br>
          <label>Upload your pics</label>
          <input type='file' name='images' multiple onChange={this.handleOnChange}></input>
          <br></br>
          <input type='submit' value='Create my account'></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(CreateTrip)