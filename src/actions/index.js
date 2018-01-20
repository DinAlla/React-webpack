import axios from 'axios'

export const addTodo = (text, importance, name) => {
  return {
    type: 'ADD_TODO',
    text:text,
    id:  Date.now(),
    importance,
    name   
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
  localStorage.setItem('token', token);
  localStorage.setItem('userName', userName);
  return {
    type: 'LOGIN_USER_SUCCESS',
    token,
    userName
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
    return axios.post("/logIn",{
      userNameToFetch: userName,
      passwordToFetch: password
      })
      .then((response)=>{
        dispatch(LoadingSuccess(response.data.token, response.data.userName))})
      .catch((error)=>{
        dispatch(LoadingError(error))});
  }
}

export const LogoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

function failureToken(){
  return{
    type: 'FAILURE_TOKEN'
  }
}

export const CheckToken = () => {
  let data = localStorage.getItem('token');
  return (dispatch) => {
    axios.post("/checkTocken", {data: data})
    .then((res)=>{
      dispatch(LoginUserRequest(localStorage.getItem('token'),localStorage.getItem('userName')));
    })
    .catch((err)=>{
      dispatch(failureToken())
    })
  }
}