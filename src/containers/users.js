import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardDeck from 'react-bootstrap/CardDeck'
import {fetchUsers} from '../actions/users'
import User from '../components/users'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers(this)
  }

  render() {
    return (
      <div className='user-container'>
        <CardDeck>
          {this.props.users? (this.props.users.map(data => <User user={data} key={data.profile_url}/>)): 'no users'}
        </CardDeck>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.allUsers,
    currentUser: state.users.currentUser
  }
}


export default connect(mapStateToProps,{fetchUsers})(UserContainer)