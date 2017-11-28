import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose as reduxCompose } from "redux";
import ReduxThunk from "redux-thunk";

import "semantic-ui-css/semantic.min.css";

import Main from "./containers/main";
import reducers from "./reducers/combine";

import "./style.css";

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;
const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Main />
    </Provider>
  </div>,
  document.querySelector(".root")
);
