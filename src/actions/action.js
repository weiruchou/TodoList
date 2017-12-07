export const addTodo = (id, text, completed, edited) => ({
    type: 'ADDTODO', 
    payload: { 
        id, 
        text, 
        completed, 
        edited 
    }
})

export const delTodo = id => ({ type: 'DELTODO', id })

export const toggleTodo = id => ({ type: 'TOGGLETODO', id })

export const editTodo = id => ({ type: 'EDITTODO', id })

export const updateTodo = (id, text) => ({type: 'UPDATETODO', id, text})

export const filterItemsAll = () => ({ type: 'SHOWALL' })

export const filterItemsCompleted = () => ({ type: 'SHOWCOMPLETED' })

export const filterItemsUnDone = () => ({ type: 'SHOWUNDONE' })