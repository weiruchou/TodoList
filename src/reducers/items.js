const items = (state = [], action) => {
    switch (action.type) {
      case 'ADDTODO': {
        console.log(state)
        return [
          ...state,
          {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
          edited: false
          }
        ]
      }

      case 'DELTODO': {
        return state.filter(item => item.id !== action.id)
      }
      
      case 'TOGGLETODO': {
        return state.map(item =>
          (item.id === action.id) 
          ? {
            id:item.id, 
            text: item.text, 
            completed: !item.completed,
            edited: item.edited
            }
          : 
            item
        )
      }

      case 'EDITTODO': {
        return state.map(item =>
          (item.id === action.id)
          ? {
            id: item.id, 
            text: item.text, 
            completed: item.completed, 
            edited: !item.edited
            }
          :
            item
        )
      }

      case 'UPDATETODO': {
        return state.map(item =>
          (item.id === action.id)
        ? {
          id: item.id,
          text: action.text,
          completed: item.completed,
          edited: !item.edited
          }
        :
          item
        )
      }

      default: {
        return state
      }
    }
  }

  export default items