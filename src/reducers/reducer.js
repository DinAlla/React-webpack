let initialState = {
  items: [],
  currentImportance: 4,
  importance: 
    [{
      value:'0',
      message: 'Степень важности 1'
    },
    {
      value:'1',
      message: 'Степень важности 2'
    },
    {
      value:'2',
      message: 'Степень важности 3'
    },
    {
      value:'3',
      message: 'Степень важности 4'
    },
    {
      value:'4',
      message: 'Показать все'
    }]
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, 
      {
        items: [
          ...state.items,
          {
          id: action.id,
          text: action.text,
          importance: action.importance
        }],
        currentImportance: 4
      })
    case 'DELETE_TODO': 
      return  Object.assign({}, state, {
        items: state.items.filter((el)=> el.id != action.id),
        currentImportance: 4})      
    case 'SORT_DATA':
      return Object.assign({}, state, {currentImportance: action.number})
    default:
      return state
  }
}

export default todo;