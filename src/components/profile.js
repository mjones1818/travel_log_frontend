import {Component} from 'react'
import {connect} from 'react-redux'
import TripContainer from '../containers/trips'
import {tripAction, fetchTrips} from '../actions/trips'
const url = process.env.NODE_ENV === 'production' ? 'https://radiant-retreat-79368.herokuapp.com' : 'http://localhost:3000'

class Profile extends Component {

  componentDidMount(){
    this.props.fetchTrips(this)
  }
  render() {
    return(
      <>
      <div className='profile'>
        <h1>Profile: {this.props.currentUser.name}</h1>
        <img id='profile-pic' src={`${url}/${this.props.currentUser.profile_url}`}/>
        <br></br>
        
      </div>
      <h4>My trips: </h4>
      <TripContainer/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, {tripAction, fetchTrips})(Profile)