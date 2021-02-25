import React from 'react'
import { Component } from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/profile'
import {connect} from 'react-redux'
import NavBar from './components/navBar'
import {logout} from './actions/users'

class App extends Component {
  state = {
    currentUser: null,
    currentProfile: null
  }

  setCurrentUser = data => {
    console.log(data)
    this.setState({
      currentUser: data.user,
      currentProfile: data.profile
    })
  }

  logout = () => {
    
  }

  render() {
    console.log(this)
    return (
      <div className="App">
        <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
        <Router>
          <Route exact path='/login' render={()=> <Login setCurrentUser={this.setCurrentUser}/>}/>
          <Route exact path='/profile' render={()=> {
            return this.props.currentUser ? (
              <Profile />
            ) : (
              <Login setCurrentUser={this.setCurrentUser} />
            )
          }} />
          
        </Router>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: (user) => {
      dispatch(logout(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
