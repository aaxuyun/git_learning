import React, { Component } from 'react';
import {connect} from 'redux';
import {immutable} from 'immutable';

export default class AddTODO extends Component {

    render() {
        return (
            <div>
                <input type='text' value={this.props.text} onChange={this.props.change} />
                <div onClick={this.props.add}>添加</div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
        return{
            text:state.getIn()
        }
}