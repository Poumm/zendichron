import React, { Component } from "react";
import { Link } from "react-router-dom";

// The editor core
import Editor, { Editable, createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css"; // we also want to load the stylesheets

// Renders json state to html, can be used on server and client side
import { HTMLRenderer } from "ory-editor-renderer";

// The content state
import content from "./content.js";

class Page extends Component {
  buildEditables() {
    /*<Editable
          editor={editor}
          id={element.dataset.id}
          onChange={state => {
            if (element.dataset.id === "1") {
              // console.log(state)
            }
          }}
        />*/
  }

  render() {
    console.log(editable);
    return (
      <div className="App">
        <Link className="btn btn-danger" to="/">
          Retour
        </Link>
      </div>
    );
  }
}

export default Page;
