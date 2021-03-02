import {Component} from 'react'
import {connect} from 'react-redux'
import TripContainer from '../containers/trips'
import {tripAction, fetchTrips} from '../actions/trips'


class Profile extends Component {

  componentDidMount(){
    // fetch(`http://localhost:3000/users/${this.props.currentUser.id}/trips`)
    // .then(resp => resp.json())
    // .then(data => this.props.trips(data))
    fetchTrips(this)
  }
  render() {
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

export default connect(mapStateToProps, {tripAction})(Profile)