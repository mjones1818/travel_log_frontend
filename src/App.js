import React from 'react'
import { Component } from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/profile'
import {connect} from 'react-redux'
import NavBar from './components/navBar'
import {logout} from './actions/users'
import Signup from './components/signup'
import {login} from './actions/users'
import CreateTrip from './components/trips/createTrip';
import TripContainer from './containers/trips'
import TripShow from './components/trips/show';
import trips from './containers/trips';

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
    return (
      <div className="App">
        <Router>
          <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
          <Switch>
            <Route exact path='/login' render={()=> <Login setCurrentUser={this.setCurrentUser}/>}/>
            <Route exact path='/profile' render={()=> {
              return this.props.currentUser ? (
                <Profile />
              ) : (
                <Login setCurrentUser={this.setCurrentUser} />
              )
            }} />
            <Route exact path='/signup' render={()=> <Signup />}/>
            <Route exact path='/trips' render={(routerProps)=> <TripContainer {...routerProps}/>}/>
            <Route path='/trips/new' render={()=> <CreateTrip/>}/>
            <Route exact path='/trips/:id' render={(routerProps)=> <TripShow {...routerProps} trip={this.props.trips.filter(trip => trip.id == routerProps.match.params.id)[0]}/>}/>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    trips: state.trips.trips
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     logout: (user) => {
//       dispatch(logout(user))
//     },
//     login: (user) => {
//       dispatch(login(user))
//     }
//   }
// }

export default connect(mapStateToProps, {logout, login})(App)
