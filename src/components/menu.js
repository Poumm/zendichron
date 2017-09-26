import _ from "lodash";
import React, { Component } from "react";
import { slide as Slide } from "react-burger-menu";

class Menu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  manageMenu() {
    const menuEnDur = {
      scenario1: { id: "scenario1", page: "index", label: "Scénario 1" },
      scenario2: { id: "scenario2", page: "index", label: "Scénario 2" }
    };

    return _.map(menuEnDur, menuItem => {
      console.log(menuItem);
      return (
        <a
          key={menuItem.id}
          className="menu-item"
          href={`/scenario/scenario1/page/${menuItem.page}`}
        >
          {menuItem.label}
        </a>
      );
    });
  }

  render() {
    return (
      <Slide>
        <a id="Acceuil" className="menu-item" href="/">
          Acceuil
        </a>
        {this.manageMenu()}
      </Slide>
    );
  }
}

export default Menu;
