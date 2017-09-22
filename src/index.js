import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { slide as menu } from "react-burger-menu";
import "./index.css";
import promise from "redux-promise";

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
    <menu>
      <a id="home" className="menu-item" href="/" />
      <a id="Scénario 1" className="menu-item" href="/scenario1" />
    </menu>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.querySelector(".root")
);
