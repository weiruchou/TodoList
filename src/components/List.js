import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import * as actionCreators from '../actions/action';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const { items, delTodo, toggleTodo } = this.props
      return (
        <div>
          <p>待辦事項：</p>
          <p>{items.map((item,index) => (
          (item) ? <li key={item.id} style={{textDecoration: item.completed? 'line-throudh' : 'none'}} onClick={toggleTodo.bind(this,item.id)}>{item.text+' 是否完成：'+item.completed }<button onClick={delTodo.bind(this,item.id)}>Ｘ</button></li> : ''))}
          </p>
        </div>
        )
    }
} 

const mapStateToProps = store => (
  { items: store.items }
)

export default connect(mapStateToProps, actionCreators)(List)