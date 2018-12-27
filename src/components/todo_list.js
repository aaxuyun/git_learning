import React,{Component}from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoActions from '../actions/todo_actions';
import TodoSelector from '../todo_selector/todo_selector';
import TodoItem from "./todo_item";

class TodoList extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul>
                {
                    (this.props.todos) && this.props.todos.map(item =>{
                     return (
                         <div>
                             <TodoItem
                                 key={item.id}
                                 id={item.id}
                                 text={item.text}
                                 isCompleted={item.isCompleted}
                                 toogleTodo={this.props.toogleTodo}
                                 removeTodo={this.props.removeTodo}
                             />
                         </div>
                     )
                    }
                    )
                }
            </ul>
        )
    }
}

const mapStateToProps=(state) => {
        return {
        todos:TodoSelector.getTodos(state)
}};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        toogleTodo:TodoActions.toogleTodo,
        removeTodo:TodoActions.removeTodo,
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);