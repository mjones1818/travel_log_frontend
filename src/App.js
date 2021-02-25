import React from 'react'
import { Component } from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/profile'

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
    console.log(this.state)
    return (
      <div className="App">
        <Router>
          <Route exact path='/login' render={()=> <Login setCurrentUser={this.setCurrentUser}/>}/>
          <Route exact path='/profile' render={()=> {
            return this.state.currentUser ? (
              <Profile currentUser={this.state.currentUser} currentProfile={this.state.currentProfile}/>
            ) : (
              <Login setCurrentUser={this.setCurrentUser} />
            )
          }} />
          
        </Router>
        
      </div>
    );
  }
}

export default App;
