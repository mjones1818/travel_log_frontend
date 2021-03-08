import Navbar from 'react-bootstrap/Navbar'
import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {NavBar, Nav} from 'react-bootstrap'
import { fetchTrips } from '../actions/trips'
import {connect} from 'react-redux'
import {logout} from '../actions/users'

class NavigationBar extends Component {
  render() {
    return (
        <>
          <Navbar bg="dark" variant="dark" sticky='top'>
            <Navbar.Brand href="#home">TravelLog</Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              {this.props.currentUser ? (
                <Fragment>
                  <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                  <Nav.Link as={Link} to='/trips'>Trips</Nav.Link>
                  <Nav.Link as={Link} to='/trips/new'>New Trip</Nav.Link>
                  <Nav.Link id='logout-button' as={Link} to='/profile' onClick={this.props.logout}>Logout</Nav.Link>
                  
                </Fragment>
              ): (
                <Fragment>
                  <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                  <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
                </Fragment>
              )}
              
              
            </Nav>
          </Navbar>
        </>
    )
  }
}




export default NavigationBar
