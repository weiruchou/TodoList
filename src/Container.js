import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import List from './components/List';

class Container extends React.Component{
    render() {
        return(
            <div>
                <Todo />
                <List />
            </div>
        )
        
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById("root")
) 