export default function manageTrips(state={
  trips: []
}, action) {
  switch (action.type) {
    case 'TRIPS':
      return {
        ...state, trips: action.trip
      }
    case 'TRIP':
      console.log('This is the TRIP reducer', action)
      // debugger
      return {
        ...state, trips: [...state.trips, action.payload]
      }

    case 'FETCHING_TRIPS':
      return {
        ...state
      }
    default:
      return state
  }
}