import React, {Component} from 'react'
import {DirectUpload} from 'activestorage'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import { Redirect } from 'react-router-dom'
class Signup extends Component {
  state = {
    name: '',
    password: '',
    profilePic: {}
  }

  handleOnChange = event => {
    if (event.target.name === 'profilePic') {
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
    let user = {
      name: this.state.name,
      password: this.state.password
    }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => this.uploadFile(this.state.profilePic, data))
  }

  uploadFile = (file, user) => {
    const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if (error) {
        console.log(error)
      } else {
        console.log('there is no error')
        fetch(`http://localhost:3000/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({profilePic: blob.signed_id})
        })
        .then(resp => resp.json())
        .then(data => this.props.login(data))
      }

    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange}></input>
        <br></br>
        <label>Password:</label>
        <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange}></input>
        <br></br>
        <label>Upload your profile pic</label>
        <input type='file' name='profilePic' onChange={this.handleOnChange}></input>
        <br></br>
        <input type='submit' value='Create my account'></input>
      </form>
    )
  }
}

export default connect(null, {login})(Signup)