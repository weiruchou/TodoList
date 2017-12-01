import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    render() {
      const { text, delTodo } = this.props
        return (
            <div>
              <p>待辦事項：</p>
              <p>{text.map((item) => (
                (item) ? <li key={item.id}>{item.text}<button onClick={delTodo.bind(this,item.id)}>Ｘ</button></li> : ''))}
              </p>
            </div>
        )
    }
} 

export default List;