import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          {this.props.currentUser ? (
            <li onClick={this.props.logout}> Logout</li>,
            <li><Link to='/trips/new'>New Trip</Link></li>
          ) : (
            <Fragment>
              <li><Link to='/login'>login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
            </Fragment>
          )}
        </ul>
      </nav>
    )
  }
}

export default NavBar