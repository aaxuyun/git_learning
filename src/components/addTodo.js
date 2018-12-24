import React from 'react';
import { connect } from 'react-redux';
import {immutable} from 'immutable';
import {todoActions} from '../actions/todo_actions';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:"",
        }
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={(e)=>this.setState({value:e.target.value})}
                    style={{
                        "width":"100px",
                        "height":"20px",
                        "border":"1px solid #ccc"
                    }}
                />
                <div onClick={this.props.addTodo(this.state.value)}>添加</div>
            </div>
        );
    }
}

const mapDispatchToProps=()=> {
    return {
        addTodo:todoActions.addTodo
    }
};

export default connect(mapDispatchToProps)(AddTodo);