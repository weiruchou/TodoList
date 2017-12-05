const items = (state = [], action) => {
    switch (action.type) {
      case 'ADDTODO':
      return [...state,{
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }]

      case 'DELTODO':
        return state.filter(item => item.id !== action.id)

      case 'TOGGLETODO':
        return state.map(item =>
          (item.id === action.id) 
          ? {id:item.id,text: item.text,completed: !item.completed}
          : item
      )

      default:
        return state
    }
  }

  export default items