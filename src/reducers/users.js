let initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN_USER_REQUEST':
      return Object.assign({}, state, {
        isAuthenticating: true,
        statusText: null
      })
    case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        userName:  action.userName,
        statusText: 'All good'
      })
    case 'LOGIN_USER_FAILURE':
      return Object.assign({}, state,{
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: 'Authentication Error: ${action.errors}'
      })
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: 'You have been successfully logged out.'
      })
    default:
      return state;
  }
}