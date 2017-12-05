import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import List from './components/List';
import Footer from './components/Footer';
import { createStore } from 'redux';
import itemApp from './reducers'
import { Provider } from 'react-redux'


class Container extends React.Component{
    render() {
        return(
            <div>
              <Todo />
              <List />
              <Footer />
            </div>
        )
        
    }
}

const store = createStore(itemApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = () => ReactDOM.render(
      <Provider store={store}>
        <Container />
      </Provider>,
      document.getElementById("root")
)

render()
//store.subscribe(render)