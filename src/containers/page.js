import map from "lodash/map";
import debounce from "lodash/debounce";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Editable } from "ory-editor-core";
import { Trash, DisplayModeToggle, Toolbar } from "ory-editor-ui";

import "ory-editor-ui/lib/index.css";

// Utiliser pour afficher la page sans possibilité de modification.
// à garder de coté pour les droits d'accès.
//import { HTMLRenderer } from "ory-editor-renderer";

import { fetchContent, saveContent } from "../actions/pages";

// react-tap-event-plugin is required for material-ui which is used by ory-editor-ui
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Page extends Component {
  componentWillMount() {
    this.props.fetchContent(
      this.props.match.params.storyCode,
      this.props.match.params.pageCode
    );
  }

  getCurrentPage() {
    return this.props.currentStory.pages.find(page => {
      return page.code === this.props.match.params.pageCode;
    });
  }

  saveContent = debounce(
    content =>
      this.props.saveContent(
        this.props.currentStory,
        this.getCurrentPage(),
        content
      ),
    300
  );

  buildEditables() {
    if (!this.props.content) {
      return <div>Loading</div>;
    }
    return map(this.props.content, component => {
      return (
        <div className="editable editable-area" data-id="10" key={component.id}>
          <Editable
            editor={this.props.editor}
            id={component.id}
            onChange={this.saveContent}
          />
        </div>
      );
    });
  }

  buildControls() {
    if (!this.props.content) {
      return <div />;
    }
    return (
      <div>
        <Trash editor={this.props.editor} />
        <DisplayModeToggle editor={this.props.editor} />
        <Toolbar editor={this.props.editor} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.buildEditables()}
        {this.buildControls()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.data.content,
    currentStory: state.data.currentStory,
    editor: state.editor
  };
}

export default connect(mapStateToProps, { fetchContent, saveContent })(Page);
