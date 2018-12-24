import React from 'react';
import AddTodo from  "./addTodo";
import TodoList from './todo_list';
import Filter from './filter';


export default class App extends React.Component {
    render() {
        return (
          <div>
              <AddTodo />
              <TodoList />
              <Filter />
          </div>
        );
    }
}