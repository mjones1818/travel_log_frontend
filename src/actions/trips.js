export const tripAction = trip => {
  return {
    type: 'TRIPS',
    trip
  }
}

export const trip = trip => {
  return {
    type: 'TRIP',
    trip
  }
}


// export const fetchTrip = data => {
//   return (
    
//     fetch(`http://localhost:3000/users/${data.props.currentUser.id}/trips`)
//     .then(resp => resp.json())
//     .then(resp => data.props.trip(resp))
//   )
// }

export const fetchTrips = data => {
  return (
    
    fetch(`http://localhost:3000/users/${data.props.currentUser.id}/trips`)
    .then(resp => resp.json())
    .then(resp => data.props.tripAction(resp))
  )
}