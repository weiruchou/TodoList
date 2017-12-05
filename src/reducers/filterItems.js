
const filterItems = (items, action) => {
    switch (action.type) {
      case 'SHOWALL':
        return action.item
      case 'SHOWCOMPLETED':
        return action.item.filter(item => item.completed)
      case 'SHOWUNDONE':
        return action.item.filter(item => !item.completed)
      default:
        return action
    }
  }


  

  export default filterItems