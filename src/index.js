import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import promise from "redux-promise";
import "semantic-ui-css/semantic.min.css";

import Main from "./containers/main";
import reducers from "./reducers/combine";

import "./style.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Main />
    </Provider>
  </div>,
  document.querySelector(".root")
);
