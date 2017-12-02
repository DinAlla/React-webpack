const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assing({}, state, {
        items: [
          ...state.items,
          {
            id: action.id,
            text: action.text,
            importance: action.importance
          }
        ]
      })
    case 'DELETE_TODO': 
      return Object.assign({}, state, {
        items: state.items.filter((el)=>el !=name)  
      })
    default:
      return state
  }
}

export default todo;