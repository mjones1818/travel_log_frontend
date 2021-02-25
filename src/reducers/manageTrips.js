export default function manageTrips(state={
  trips: []
}, action) {
  switch (action.type) {
    case 'ADD_TRIP':
      return {
        ...state, trips: [...state.trips, action.trip]
      }
    default:
      return state
  }
}