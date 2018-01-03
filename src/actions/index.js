
export const addTodo = (text, importance) => {
  return {
    type: 'ADD_TODO',
    text:text,
    id:  Date.now(),
    importance    
  }
}

export const delTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const sortTodo = (number) => {
  return {
    type: 'SORT_DATA',
    number
  }
}

function LoadingStart() {
  return {
    type: 'LOGIN_USER_REQUEST'
  }
}

function LoadingSuccess(token, userName){
  return {
    type: 'LOGIN_USER_SUCCESS',
    token: token,
    userName: userName
  }
}

function LoadingError(errors) {
  return {
    type: 'LOGIN_USER_FAILURE',
    errors
  }
}

export const LoginUserRequest = (userName, password) => {
  return (dispatch) => {
    dispatch(LoadingStart());
    let toFetch = {
      userNameToFetch: userName,
      passwordToFetch: password
    };
    console.log("Start loading" + toFetch.passwordToFetch);
    return fetch("/loading",{
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(toFetch),
      })
      .then((response) => response.json())
      .then((responseJson)=>{
        console.log('in first then ' + responseJson);
        dispatch(LoadingSuccess(responseJson.token, responseJson.userName))})
      .catch((error)=>{
        console.log('error+' +error);
        dispatch(LoadingError(error))});
  }
}

export const LogoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}