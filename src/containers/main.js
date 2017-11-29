import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Home from "../components/home";
import Page from "./page";
import Menu from "../components/menu";
import { fetchMenu } from "../actions/index";

const renderMergedProps = (component, ...props) => {
  const finalProps = Object.assign({}, ...props);
  return React.createElement(component, finalProps);
};

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
              <Route
                path="/"
                render={routeProps => {
                  //TODO géré stories et menu via un seul appel qui renvois les stories sans les pages et enregistre le tout dans le reduxstate
                  return renderMergedProps(Home, this.props.stories);
                }}
              />
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
