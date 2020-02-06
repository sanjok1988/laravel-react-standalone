import {hot} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from "react-router";
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './stores/index.js';
import UserForm from './components/Users/UserForm.js';
import routes from "./routes.js";

// import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout/MainLayout';

// import DashboardPage from './pages/DashboardPage';
// const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

// const getBasename = () => {
//     return `/${process.env.PUBLIC_URL.split('/').pop()}`;
//   };

class App extends React.Component {

    render() {
        return (
            <div>
              <h1>Hello!</h1>
              <p>Wow Excellent!</p>
              <Provider store={store}>

                <UserForm/>
              </Provider>
            </div>
          );
    }

}

export default hot(module)(App);
