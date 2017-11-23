import _ from "lodash";
import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

class MenuCompo extends Component {
  manageMenu() {
    const menuEnDur = {
      scenario1: { id: "scenario1", page: "index", label: "Scénario 1" },
      scenario2: { id: "scenario2", page: "index", label: "Scénario 2" }
    };

    return _.map(menuEnDur, menuItem => {
      return (
        <Menu.Item
          key={menuItem.id}
          href={`/scenario/${menuItem.id}/page/${menuItem.page}`}
        >
          {menuItem.label}
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <Menu fixed="left" vertical inverted>
        <Container>
          <Menu.Item as="a" header href="/">
            Acceuil
          </Menu.Item>

          {this.manageMenu()}
        </Container>
      </Menu>
    );
  }
}

export default MenuCompo;
