export const login = user => {
  return {
    type: 'LOGIN',
    user
  }
}

export const logout = user => {
  return {
    type: 'LOGOUT',
    user
  }
}

export function fetchUsers(data) {
  return dispatch => {
    dispatch({type: 'FETCHING_USERS'})
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(resp => dispatch({type: 'USERS', payload: resp}))
  }

}