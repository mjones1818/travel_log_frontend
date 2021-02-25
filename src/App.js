import React from 'react'
import { Component } from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/profile'
import {connect} from 'react-redux'

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

  render() {
    console.log(this)
    return (
      <div className="App">
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


export default connect(mapStateToProps)(App)
