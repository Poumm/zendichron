import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <div>Scenario 1</div>
        <Link className="btn btn-danger" to="/">
          Retour
        </Link>
      </div>
    );
  }
}

export default Page;
