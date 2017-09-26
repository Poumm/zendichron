import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "../App.css";

class App extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Menu>
          <a id="Acceuil" className="menu-item" href="/">
            Acceuil
          </a>
          <a id="Scénario1" className="menu-item" href="/scenario1">
            Scénario 1
          </a>
        </Menu>

        <div className="App">
          <p>Ci-dessous la liste des scénarios</p>
        </div>
      </div>
    );
  }
}

export default App;
