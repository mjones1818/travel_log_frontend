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