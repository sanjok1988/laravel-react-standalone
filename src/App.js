import {hot} from 'react-hot-loader';
import React, { Component } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

// import { createStore } from "redux";
// import { Provider } from "react-redux";

// import Counter from "./components/Counter";
// import counter from "./reducers/counter";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

import { Admin, Resource, ListGuesser } from "react-admin";


import { UserList } from './views/users/UserList';
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

// const store = createStore(counter);

class App extends Component {

    render() {
        return (

            // <Provider store={store}>

            //     <div className="App">

            //     <Counter />
            //     </div>
            // </Provider>
            <Admin dataProvider={dataProvider} >
                <Resource name="users" list={ListGuesser} />
                {/* <Resource name="users" list={UserList} /> */}
            </Admin>
          );
    }

}

export default hot(module)(App);
