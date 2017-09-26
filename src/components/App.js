import React, { Component } from "react";
import "../App.css";

class App extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <p>Ci-dessous la liste des scénarios</p>
      </div>
    );
  }
}

export default App;
