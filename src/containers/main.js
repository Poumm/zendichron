import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";

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
      <Grid>
        <Grid.Column width={3}>
          <Menu menu={this.props.menu} />
        </Grid.Column>
        <Grid.Column width={13}>
          <BrowserRouter>
            <Switch>
              <Route
                path="/scenario/:idSenario/page/:idPage"
                component={Page}
              />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { menu: state.data.menu };
}

export default connect(mapStateToProps, { fetchMenu })(Main);
