import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import "semantic-ui-css/semantic.min.css";

import App from "./components/app";
import Page from "./containers/page";
import Menu from "./components/menu";
import reducers from "./reducers/combine";

import "./style.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
    <Menu />
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
