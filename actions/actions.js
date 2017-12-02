export const addTodo = (text, importance) => {
  return {
    type: 'ADD_TODO',
    text,
    id:  Date.now(),
    importance    
  }
}

export const delTodo = (name) => {
  return {
    type: 'DELETE_TODO',
    name
  }
}