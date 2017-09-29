import React, { Component } from "react";
import { Trash, DisplayModeToggle, Toolbar } from "ory-editor-ui";
import "ory-editor-ui/lib/index.css";

class EditorTools extends Component {
  render() {
    return (
      <div>
        <Trash editor={editor} />
        <DisplayModeToggle editor={editor} />
        <Toolbar editor={editor} />
      </div>
    );
  }
}

export default EditorTools;
