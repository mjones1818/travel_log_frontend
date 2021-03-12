import {Component} from 'react'
import {connect} from 'react-redux'
import TripContainer from '../../containers/trips'
import {tripAction, fetchTrips} from '../../actions/trips'
import CardDeck from 'react-bootstrap/CardDeck'
import Trip from '../trips/index'

const url = process.env.NODE_ENV === 'production' ? 'https://radiant-retreat-79368.herokuapp.com' : 'http://localhost:3000'

class UserShow extends Component {

  componentDidMount(){
    // fetch(`http://localhost:3000/users/${this.props.currentUser.id}/trips`)
    // .then(resp => resp.json())
    // .then(data => this.props.trips(data))
    this.props.fetchTrips(this.props.user)
  }
  render() {
    return(
      <>
      <div className='user-show'>
        <h1>Profile: {this.props.user.name}</h1>
        <img id='profile-pic' src={`${url}/${this.props.user.profile_url}`}/>
        <br></br>
        
      </div>
      <TripContainer/>
      <CardDeck>
        {/* <Trip /> */}
      </CardDeck>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, {tripAction, fetchTrips})(UserShow)