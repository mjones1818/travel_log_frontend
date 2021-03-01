export default function manageUsers(state={
  currentUser: null,
  currentProfile: null
}, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        currentUser: action.user
      }
    case 'LOGOUT':
      return {
        currentUser: null
      }
    default:
      return state
  }
}