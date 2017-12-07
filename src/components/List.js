import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import * as actionCreators from '../actions/action';
import { connect } from 'react-redux';
import '../css/style.css'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state= { updateInput: '' }
  }

  handleUpdateInput(e) {
    this.setState({ updateInput: e.target.value })
  }

  handleOnClickSureButton(item) {
    if (this.state.updateInput !== '') {
      this.props.updateTodo(item.id, this.state.updateInput)
      this.setState({ updateInput: '' })
    }
  }

  render() {
    const { items, delTodo, toggleTodo, editTodo, updateTodo } = this.props
    return (
      <div>
        <p>待辦事項：</p>
        <p>
          {items.map((item,index) => (
          (item) 
            ? <div>
                <li 
                key= {item.id}
                /* style= {{
                  textDecoration: item.completed ? 'line-through' : 'none', 
                  color: item.completed ? 'red' : '',
                  display: 'inline-flex',
                  marginRight: '10px'
                }} */
                className= {item.completed ? 'completed' : 'uncompleted' }
                onClick= {toggleTodo.bind(this,item.id)}
                >
                {item.text}
                </li>
                <input type="text" 
                /* style= {{display: item.edited ? '' : 'none'}} */
                className= {item.edited ? 'inputAndSureEdited' : 'inputAndSureNotEdited' }
                value= {this.state.updateInput}
                onChange= {this.handleUpdateInput.bind(this)}
                />
                <button
                /* style= {{display: item.edited ? '' : 'none'}} */
                className= {item.edited ? 'inputAndSureEdited' : 'inputAndSureNotEdited' }
                onClick= {this.handleOnClickSureButton.bind(this,item)}
                >
                  確定
                </button>
                <button
                /* style= {{display: item.edited ? 'none' : ''}} */
                className= {item.edited ? 'edited' : 'Notedited' }
                onClick= {editTodo.bind(this,item.id)}
                >
                  修改
                </button>
                <button onClick= {delTodo.bind(this,item.id)}>
                  刪除
                </button>
              </div>
            : 
              ''
          ))}
        </p>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  let doFilterItems = state.items ;

  doFilterItems = state.items.filter((item) => {
    if (state.filterItems === "SHOWCOMPLETED") {
      return item.completed
    } else if (state.filterItems === "SHOWUNDONE") {
      return !item.completed
    } else if (state.filterItems === "SHOWALL") {
      return doFilterItems
    }
  })

  // if (state.filterItems === "SHOWCOMPLETED") {
  //   doFilterItems = state.items.filter((item) => {
  //     return item.completed
  //   })
  // } else if (state.filterItems === "SHOWUNDONE") {
  //   doFilterItems = state.items.filter((item) => {
  //     return !item.completed
  //   })
  // } else if (state.filterItems === "SHOWALL") {
  //   doFilterItems
  // }

  return { items: doFilterItems }
}
  

export default connect(mapStateToProps, actionCreators)(List)