export default function manageUsers(state={
  currentUser: null,
  currentProfile: null
}, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN', action.user)
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