
const filterItems = (state = 'SHOWALL', action) => {
    switch (action.type) {
      case 'SHOWALL':
        return 'SHOWALL'
      case 'SHOWCOMPLETED':
        return 'SHOWCOMPLETED'
      case 'SHOWUNDONE':
        return 'SHOWUNDONE'
      default:
        return state
    }
  }

  export default filterItems