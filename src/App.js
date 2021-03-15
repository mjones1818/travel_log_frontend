import React from 'react'
import { Component } from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/profile'
import {connect} from 'react-redux'
import NavigationBar from './components/reactNavBar'
import {logout} from './actions/users'
import Signup from './components/signup'
import {login} from './actions/users'
import CreateTrip from './components/trips/createTrip';
import TripContainer from './containers/trips'
import TripShow from './components/trips/show';
import trips from './containers/trips';
import UserContainer from './containers/users'
import UserShow from './components/users/show'

class App extends Component {
  state = {
    currentUser: null,
    currentProfile: null
  }

  // setCurrentUser = data => {

  //   this.setState({
  //     currentUser: data.user,
  //     currentProfile: data.profile
  //   })
  // }


  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar currentUser={this.props.currentUser} logout={this.props.logout}/>
          <Switch>
            <Route exact path='/users/:id' render={(routerProps)=> <UserShow {...routerProps} user={this.props.users.filter(user => user.id == routerProps.match.params.id)[0]}/>}/>
            <Route exact path='/' render={(routerProps)=> <UserContainer {...routerProps}/>}/>
            <Route exact path='/login' render={()=> <Login login={this.props.login} fetchUser={this.props.fetchUser}/>}/>
            <Route exact path='/profile' render={()=> {
              return this.props.currentUser ? (
                <Profile />
              ) : (
                <Login setCurrentUser={this.setCurrentUser} />
              )
            }} />
            <Route exact path='/signup' render={()=> <Signup />}/>
            <Route exact path='/trips' render={(routerProps)=><><h1>My Trips</h1> <TripContainer {...routerProps}/></>}/>
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
    trips: state.trips.trips,
    users: state.users.allUsers
  }
}

// const patchToProps = dispatch => {
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
