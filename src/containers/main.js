import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Home from "../components/home";
import Page from "./page";
import Menu from "../components/menu";
import { fetchStories } from "../actions/index";

import "../home.css";

const renderMergedProps = (component, ...props) => {
  const finalProps = Object.assign({}, ...props);
  return React.createElement(component, finalProps);
};

class Main extends Component {
  componentWillMount() {
    this.props.fetchStories();
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu stories={this.props.stories} />
        </Grid.Column>
        <Grid.Column width={13}>
          <BrowserRouter>
            <Switch>
              <Route path="/story/:idStory/page/:idPage" component={Page} />
              <Route path="/addstory" component={Page} />
              <Route
                path="/"
                render={routeProps => {
                  //TODO géré stories et menu via un seul appel qui renvois les stories sans les pages et enregistre le tout dans le reduxstate
                  return renderMergedProps(Home, {
                    stories: this.props.stories
                  });
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
  return { stories: state.data.stories };
}

export default connect(mapStateToProps, { fetchStories })(Main);
