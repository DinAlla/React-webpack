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