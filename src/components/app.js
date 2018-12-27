import React,{Component}from 'react';
import AddTodo from  "./addTodo";
import TodoList from './todo_list';
//import Filter from './filter';


export default class App extends Component{
    render(){
        return (
          <div>
              <AddTodo />
              <TodoList />

          </div>
        );
    }
}