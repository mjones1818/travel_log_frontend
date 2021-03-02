import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { fetchTrips,trips } from '../actions/trips'
import Trip from '../components/trips/index'
import {tripAction, fetchTrips} from '../actions/trips'

class TripContainer extends Component {
  // componentDidMount(){
  //   // fetch(`http://localhost:3000/users/${this.props.currentUser.id}/trips`)
  //   // .then(resp => resp.json())
  //   // .then(data => this.props.trips(data))
  //   fetchTrips(this)
  // }

  componentDidUpdate() {
    fetchTrips(this)
  }
  
  render() {
    console.log('trip container', this.props.trips)
    // fetchTrips(this)
    return (
      <div className='trip-container'>
        {this.props.trips ? (this.props.trips.map(data => <Trip trip={data}/>)) : 'No trips'}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips.trips,
    currentUser: state.users.currentUser
  }
}
export default connect(mapStateToProps,{tripAction})(TripContainer)