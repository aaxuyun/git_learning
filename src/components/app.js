import React, { Component } from 'react';
import todoList from './todo_list';
import filter from './filter';


export default class App extends Component {
    render() {
        return (
          <div>
            <todoList />
            <filter />
          </div>
        );
    }
}