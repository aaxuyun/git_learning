import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TodoReducer from './reduces/todo_reducer';
import App from './components/app';

let store = createStore(TodoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));