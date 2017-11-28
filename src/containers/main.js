import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../components/home";
import Page from "./page";
import Menu from "../components/menu";
import { fetchMenu } from "../actions/index";

class Main extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  render() {
    return (
      <div>
        <Menu menu={this.props.menu} />
        <BrowserRouter>
          <div>
            <Switch>
              <Route
                path="/scenario/:idSenario/page/:idPage"
                component={Page}
              />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { menu: state.data.menu };
}

export default connect(mapStateToProps, { fetchMenu })(Main);
