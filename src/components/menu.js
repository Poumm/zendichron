import _ from "lodash";
import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

class MenuCompo extends Component {
  manageMenu() {
    return _.map(this.props.menu, menuItem => {
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
