export default function manageUsers(state={
  currentUser: null,
  currentProfile: null
}, action) {
  switch (action.type) {
    case 'LOGIN':
      debugger
      return {
        currentUser: action.user
      }
    default:
      return state
  }
}