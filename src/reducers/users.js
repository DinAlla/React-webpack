let initialState = {
  accessToken: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  location: 'login'
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
        accessToken: action.token,
        userName:  action.userName,
        statusText: 'All good',
        location: '/app'
      })
    case 'LOGIN_USER_FAILURE':
      return Object.assign({}, state,{
        isAuthenticating: false,
        isAuthenticated: false,
        accessToken: null,
        userName: null,
        statusText: 'Authentication Error: ${action.errors}',
        location: '/login'
      })
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        isAuthenticated: false,
        accessToken: null,
        userName: null,
        statusText: 'You have been successfully logged out.'
      })
    case 'FAILURE_TOKEN':
      return Object.assign({}, state, {
        isAuthenticated: false,
        location: '/login'
      })
    default:
      return state;
  }
}