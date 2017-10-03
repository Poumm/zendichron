import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Editable } from "ory-editor-core";

// Renders json state to html, can be used on server and client side
import { HTMLRenderer } from "ory-editor-renderer";

import { fetchContent } from "../actions/index";

class Page extends Component {
  componentWillMount() {
    this.props.fetchContent();
    //console.log("fetch ok");
    //console.log(this.props.content);
  }

  buildEditables() {
    console.log("buildEditable");
    console.log(this.props.editor);
    //console.log(this.props.content);
    if (!this.props.content) {
      return <div>Loading</div>;
    }
    return _.map(this.props.content, component => {
      console.log(component);
      return (
        <div key={component.id}>
          <div className="container">
            <div className="editable editable-area" data-id="10">
              <Editable
                editor={this.props.editor}
                id={component.id}
                onChange={state => {
                  console.log(state);
                }}
              />
            </div>
          </div>
          <HTMLRenderer state={component} plugins={this.props.editor.plugins} />
        </div>
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
export default connect(mapStateToProps, { fetchContent })(Page);
