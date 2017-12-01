import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import List from './components/List';
import { createStore } from 'redux';
import addTodo from './reducers'

class Container extends React.Component{
    render() {
        return(
            <div>
              <Todo
              value= {store.getState()}
              addTodo= {(text) => store.dispatch({ type: 'ADDTODO' ,test: {
        id: Number(new Date()),text: text,
      },})}
              />
              <List
              text= {store.getState()}
              delTodo= {(id) => store.dispatch({type: 'DELTODO' , id: id})}
              />
            </div>
        )
        
    }
}

const store = createStore(addTodo,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const render = () => ReactDOM.render(
      <Container />,
      document.getElementById("root")
)

render()
store.subscribe(render)