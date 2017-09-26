import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./index.css";
import promise from "redux-promise";

import App from "./components/app";
import Page from "./components/page";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
    <Menu>
      <a id="Acceuil" className="menu-item" href="/">
        Acceuil
      </a>
      <a
        id="Scénario1"
        className="menu-item"
        href="/scenario/scenario2/page/index"
      >
        Scénario 1
      </a>
    </Menu>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/scenario/:idSenario/page/:idPage" component={Page} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.querySelector(".root")
);
