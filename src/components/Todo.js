import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import * as actionCreators from '../actions/action';
import { connect } from 'react-redux';

class Todo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {usetInput:''}
      }

      handleOnChange(e) {
        this.setState({usetInput: e.target.value})
      }
      handleOnClick() {
        this.setState({usetInput:''})
        this.props.addTodo(Number(new Date()),this.state.usetInput)
      }

      render() {
        const { addTodo } = this.props
        return(
            <div>
              <h1>Todo List</h1>
              <input type="text" 
                placeholder="請輸入待辦事項" 
                value= {this.state.usetInput} 
                onChange={this.handleOnChange.bind(this)}
              />
              <button onClick={this.handleOnClick.bind(this)}>確定</button>
            </div>
        )
    }
}

const mapStateToProps = store => (
  { items: store.items }
)

export default connect(mapStateToProps, actionCreators)(Todo)
