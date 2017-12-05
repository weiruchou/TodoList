import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import * as actionCreators from '../actions/action';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        const { items , filterItems , filterItemsAll , filterItemsCompleted , filterItemsUnDone } = this.props
        console.log(filterItems)
        return (
          <p>
          顯示：
          <button onClick= {this.props.filterItemsAll.bind(this,items)}>全部</button>
          <button onClick= {this.props.filterItemsCompleted.bind(this,items)}>完成</button>
          <button onClick= {this.props.filterItemsUnDone.bind(this,items)}>未完成</button>
          </p>
        )
    }
}

const mapStateToProps = store => (
    { items: store.items,
      filterItems: store.filterItems,}
  )
      
export default connect(mapStateToProps, actionCreators)(Footer)