import {Component} from 'react'
import {connect} from 'react-redux'

class Profile extends Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        <h1>Profile: {this.props.currentUser.name}</h1>
        <img src={`http://localhost:3000/${this.props.currentUser.profile_url}`}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(Profile)