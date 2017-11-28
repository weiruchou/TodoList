import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
    render() {
        return(
            <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="請輸入待辦事項"/>
            <button>確定</button>
            </div>
        )
    }
}

export default Todo;