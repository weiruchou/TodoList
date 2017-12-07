import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import * as actionCreators from '../actions/action';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        const { items , filterItems , filterItemsAll , filterItemsCompleted , filterItemsUnDone } = this.props
        return (
          <p>
          顯示：
          <button onClick= {this.props.filterItemsAll}>全部</button>
          <button onClick= {this.props.filterItemsCompleted}>完成</button>
          <button onClick= {this.props.filterItemsUnDone}>未完成</button>
          </p>
        )
    }
}

const mapStateToProps = state => (
    { items: state.items,
      filterItems: state.filterItems,}
  )
      
export default connect(mapStateToProps, actionCreators)(Footer)