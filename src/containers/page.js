import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Editable } from "ory-editor-core";

// Utiliser pour afficher la page sans possibilité de modification.
// à garder de coté pour les droits d'accès.
//import { HTMLRenderer } from "ory-editor-renderer";

import { fetchContent } from "../actions/index";

class Page extends Component {
  componentWillMount() {
    this.props.fetchContent();
  }

  buildEditables() {
    if (!this.props.content) {
      return <div>Loading</div>;
    }
    return _.map(this.props.content, component => {
      return (
        <div className="container" key={component.id}>
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
      );
    });
  }

  render() {
    return <div>{this.buildEditables()}</div>;
  }
}

function mapStateToProps(state) {
  return { content: state.content, editor: state.editor };
}

export default connect(mapStateToProps, { fetchContent })(Page);
