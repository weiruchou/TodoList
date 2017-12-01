import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {usetInput:''}
      }

      handleOnChange(e) {
        this.setState({usetInput: e.target.value})
      }

      render() {
        const { value,addTodo } = this.props
        return(
            <div>
              <h1>Todo List</h1>
              <input type="text" placeholder="請輸入待辦事項" onChange={this.handleOnChange.bind(this)}/>
              <button onClick={addTodo.bind(this,this.state.usetInput)}>確定</button>
              <p>{'現在輸入：' + this.state.usetInput}</p>
            </div>
        )
    }
}


export default Todo;