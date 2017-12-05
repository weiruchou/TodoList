export const addTodo = (id,text,completed) => (
    {type: 'ADDTODO', payload: { id, text , completed}}
)

export const delTodo = id => ({ type: 'DELTODO', id })

export const toggleTodo = id => ({type: 'TOGGLETODO', id})

export const filterItemsAll = item => ({type: 'SHOWALL' , item})

export const filterItemsCompleted = item => ({type: 'SHOWCOMPLETED' , item})

export const filterItemsUnDone = item => ({type: 'SHOWUNDONE' , item})