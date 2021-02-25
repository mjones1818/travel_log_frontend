import React, {Component} from 'react'

class Signup extends Component {
  state = {
    name: '',
    password: '',
    profilePic: {}
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
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

export default Signup