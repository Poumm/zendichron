import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Home from "../components/home";
import Page from "./page";
import AddStory from "./addStory";
import Menu from "../components/menu";
import { fetchStories } from "../actions/stories";

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
        <Grid.Column width={2}>
          <Menu stories={this.props.stories} />
        </Grid.Column>
        <Grid.Column width={14}>
          <BrowserRouter>
            <Switch>
              <Route path="/story/:idStory/page/:idPage" component={Page} />
              <Route path="/addstory" component={AddStory} />
              <Route
                path="/"
                render={routeProps => {
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
