import React, { Component } from "react";
import { Link } from "react-router-dom";

// Renders json state to html, can be used on server and client side
import { HTMLRenderer } from "ory-editor-renderer";

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
