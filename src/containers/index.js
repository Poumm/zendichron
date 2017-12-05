import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStory } from "../actions/stories";

class IndexPage extends Component {
  componentWillMount() {
    console.log(this.props);
    if (!this.props.currentStory) {
      this.props.fetchStory(this.props.match.params.storyCode);
    }
  }

  render() {
    const currentStory = this.props.currentStory;
    if (currentStory) {
      return (
        <div>
          <h1>{currentStory.title}</h1>
          <p>{currentStory.summary}</p>
        </div>
      );
    } else return <div>Chargement...</div>;
  }
}

function mapStateToProps(state) {
  return { currentStory: state.data.currentStory };
}

export default connect(mapStateToProps, { fetchStory })(IndexPage);
