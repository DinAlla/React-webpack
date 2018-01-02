import {fetch, parseResponse} from 'redux-oauth';

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
    error
  }
}

export const LoginUserRequest = (userName, password) => {
  return (dispatch) => {
    dispatch(LoadingStart());
    console.log("Start loading");
    return dispatch(fetch('/loading', userName, password)
      .then(({token, userName})=>dispatch(LoadingSuccess(token, userName)))
      .catch(({error})=>dispatch(LoadingError(error)))
    );
  }
}

export const LogoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}