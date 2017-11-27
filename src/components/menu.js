import React from "react";
import { Menu, Container } from "semantic-ui-react";

function manageMenu(props) {
  if (props.menu)
    return props.menu.map(menuItem => {
      return (
        <Menu.Item key={menuItem._id} href={`/scenario/${menuItem.code}/index`}>
          {menuItem.title}
        </Menu.Item>
      );
    });
}

const MenuCompo = props => (
  <Menu fixed="left" vertical inverted>
    <Container>
      <Menu.Item as="a" header href="/">
        Acceuil
      </Menu.Item>

      {manageMenu(props)}
    </Container>
  </Menu>
);

export default MenuCompo;
