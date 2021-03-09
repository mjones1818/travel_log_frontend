import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardDeck from 'react-bootstrap/CardDeck'
import {fetchUsers} from '../actions/users'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers(this)
  }

  render() {
    return (
      <div className='user-container'>
        {/* <CardDeck>

        </CardDeck> */}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.users.currentUser
  }
}


export default connect(mapStateToProps,{fetchUsers})(UserContainer)