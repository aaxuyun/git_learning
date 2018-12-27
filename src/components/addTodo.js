import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoActions from '../actions/todo_actions';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            value:"",
        }
    }
    addTodoItem=()=>{
        this.props.addTodo(this.state.value);
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
                <div onClick={this.addTodoItem}>添加</div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{};

};
const mapDispatchToProps=(dispatch)=> {
    return bindActionCreators({
        addTodo:TodoActions.addTodo
    },dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);