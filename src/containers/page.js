import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Editable } from "ory-editor-core";

// Renders json state to html, can be used on server and client side
import { HTMLRenderer } from "ory-editor-renderer";

import { fetchContent } from "../actions/index";

class Page extends Component {
  componentWillMount() {
    this.props.content = fetchContent();
  }

  buildEditables() {
    return this.props.content.map(component => {
      return (
        <Editable
          editor={this.props.editor}
          id={component.id}
          onChange={state => {
            console.log(state);
          }}
        />
      );
    });
  }

  render() {
    return (
      <div className="App">
        {this.buildEditables()}
        <Link className="btn btn-danger" to="/">
          Retour
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.content, editor: state.editor };
}
export default connect(mapStateToProps)(Page);
