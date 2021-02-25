import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'

class Login extends Component{
  state = {
    name: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let user = {
      name: this.state.name,
      password: this.state.password
    }

    this.setState({
      name: '',
      password: ''
    })

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => this.props.login(data))

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
          <input  type='submit' />
        </form>
      </div>

    )
  }
}

// const mapDispatchToProps = dispatch =>{
//   return {login: (user) => {
//     dispatch(login(user))
//   },}
// }
export default connect(null, {login})(Login)