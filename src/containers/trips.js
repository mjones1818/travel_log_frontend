import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trip from '../components/trips/index'
class TripContainer extends Component {
  
  render() {
    console.log('trip container', this.props.trips)
    return (
      <div className='trip-container'>
        {this.props.trips[0].map(data => <Trip trip={data}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips.trips
  }
}
export default connect(mapStateToProps)(TripContainer)