import React from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './stores/index.js';
import UserForm from './components/Users/UserForm.js';

function App() {

  return (
    <div>
      <h1>Hello</h1>
      <p>Wow Excellent</p>
      <Provider store={store}>
        <UserForm/>
      </Provider>
    </div>
  );
}

export default hot(module)(App);
