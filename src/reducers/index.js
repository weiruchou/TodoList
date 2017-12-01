export default (state = [], action) => {
    switch (action.type) {
      case 'ADDTODO':
      return [{
        id: action.test.id++,
        text: action.test.text,
      }, ...state]
      case 'DELTODO':
        return state.filter(item => item.id !== action.id)
      default:
        return state
    }
  }
  