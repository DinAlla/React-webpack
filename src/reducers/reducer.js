let initialState = {
  items: [],
  currentImportance: '',
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
//current importance, для него сделать экшн 
console.log('state in redicer ' + initialState);
const todo = (state = initialState, action) => {
  console.log(state.items + ' in reduser');
  switch (action.type) {
    case 'ADD_TODO':
      return {
        items: [
          ...state.items,
          {
          id: action.id,
          text: action.text,
          importance: action.importance
        }],
        currentImportance: state.importance,
        importance: state.importance
      }
    case 'DELETE_TODO': 
      return Object.assign({}, state, {
        items: state.items.filter((el)=> el.id != action.name)  
      })
    case 'SORT_DATA':
      return {
        currentImportance: action.number
      }
    default:
      return state
  }
}

export default todo;