import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from "./containers/main";
import {Provider} from "react-redux";
import 'antd/dist/antd.css';
import {store} from "./store/store";
import {LOGIN} from "./store/actions/types";
import Staff from "./containers/staff";
import Order from "./containers/order";
import Stock from "./containers/stock";

if(localStorage.getItem("access_token")){
    store.dispatch({
        type: LOGIN,
        payload: localStorage.getItem("access_token")
    })
}

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <Route path="/" exact component={Main}/>
                  <Route path="/staff" exact component={Staff}/>
                  <Route path="/orders" exact component={Order}/>
                  <Route path="/stocks" exact component={Stock}/>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
