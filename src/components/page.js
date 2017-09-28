import React, { Component } from "react";
import { Link } from "react-router-dom";
import Editor, { Editable, createEmptyState } from "ory-editor-core";
import native from "ory-editor-plugins-default-native";
import image from "ory-editor-plugins-image";
import "ory-editor-plugins-image/lib/index.css";

const editable = createEmptyState();

const editor = new Editor({
  plugins: {
    content: [image],
    native
  },
  editables: [editable]
});

class Page extends Component {
  render() {
    console.log(editable);
    return (
      <div className="App">
        <Editable
          id={editable.id}
          editor={editor}
          onChange={editable => {
            console.log(editable);
          }}
        />
        <Link className="btn btn-danger" to="/">
          Retour
        </Link>
      </div>
    );
  }
}

export default Page;
