import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoReducer,{initTodoState} from './reduces/todo_reducer';
import App from './components/app';

let store = createStore(todoReducer,initTodoState);

ReactDOM.render(
( <Provider store={store}>
    <App/>
  </Provider>)
, document.getElementById('root'));