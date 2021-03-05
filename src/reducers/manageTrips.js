export default function manageTrips(state={
  trips: []
}, action) {
  switch (action.type) {
    case 'TRIPS':
      return {
        ...state, trips: action.trip
      }
    case 'TRIP':

      return {
        ...state, trips: [...state.trips, action.payload]
      }
    case 'FETCHING_TRIPS':
      console.log('FETCHING TRIPS')
      return {
        ...state
      }
    default:
      return state
  }
}