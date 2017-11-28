import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                <p>待辦事項：</p>
                <li>123</li>
                <li>456</li>
                <li>789</li>
            </div>
        )
    }
} 

export default List;