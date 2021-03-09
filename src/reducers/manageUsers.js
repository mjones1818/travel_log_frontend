export default function manageUsers(state={
  currentUser: null,
  currentProfile: null,
  allUsers: null
}, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.user
      }
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null
      }
    case 'FETCHING_USERS':
      return {
        ...state
      }
    case 'USERS':
      return {
        ...state,
        allUsers: action.payload
      }
    default:
      return state
  }
}