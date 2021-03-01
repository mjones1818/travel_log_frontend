import {Component} from 'react'
import {connect} from 'react-redux'
import TripContainer from '../containers/trips'
import {trips} from '../actions/trips'

class Profile extends Component {

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}/trips`)
    .then(resp => resp.json())
    .then(data => this.props.trips(data))
  }
  render() {
    return(
      <div>
        <h1>Profile: {this.props.currentUser.name}</h1>
        <img src={`http://localhost:3000/${this.props.currentUser.profile_url}`}/>
        <TripContainer></TripContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, {trips})(Profile)