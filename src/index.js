import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/Store";
import Products from "./Products";
import Product from "./Component/Product";
import './styles.css';

import { Route, Switch, BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/button" component={Product} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);
