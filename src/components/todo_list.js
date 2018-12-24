import React from 'react';
import { connect } from 'react-redux';
import TodoActions from '../actions/todo_actions';
import TodoSelector from '../todo_selector/todo_selector';
import TodoItem from "./todo_item";

class TodoList extends React.Component{
    render() {
        return (
            <div>
                {
                    this.props.todos.map(item =>{
                     return (
                             <TodoItem
                                 id={item.id}
                                 text={item.text}
                                 isCompleted={item.isCompleted}
                                 tooggleTodo={this.props.toogleTodo}
                                 removeTodo={this.props.removeTodo}
                             />
                     )
                    }
                    )
                }
            </div>
        )
    }
}

const mapStateToProps=(state) => ({
        todos:TodoSelector.getTodos(state)
});

    const mapDispatchToProps=()=>({
        toogleTodo:TodoActions.toogleTodo,
            removeTodo:TodoActions.removeTodo,
    });
    export default connect(mapStateToProps,mapDispatchToProps)(TodoList);