import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trip from '../components/trips/index'
import {tripAction, fetchTrips} from '../actions/trips'
import {Redirect, Link, useHistory} from 'react-router-dom'
import TripShow from '../components/trips/show'
// import {CardDeck} from 'react-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'

class TripContainer extends Component {
  

  handleClick = event => {
    console.log(event.target);
  }

  componentDidUpdate() {
    fetchTrips(this)
  }
  
  render() {

    return (
      <div className='trip-container'>
        <CardDeck>
          {this.props.trips ? (this.props.trips.map(data => <Trip trip={data} handleClick={this.handleClick}/>)) : 'No trips'}
        </CardDeck> 
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