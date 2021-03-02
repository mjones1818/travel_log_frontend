import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trip from '../components/trips/index'
import {tripAction, fetchTrips} from '../actions/trips'
import {Redirect} from 'react-router-dom'

class TripContainer extends Component {
  handleClick = event => {
    console.log(event.target);
    <Redirect to='/profile'/>
  }

  componentDidUpdate() {
    fetchTrips(this)
  }
  
  render() {
    return (
      <div className='trip-container'>
        {this.props.trips ? (this.props.trips.map(data => <Trip trip={data} handleClick={this.handleClick}/>)) : 'No trips'}

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