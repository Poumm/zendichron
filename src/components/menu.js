import React from "react";
import { Menu, Container } from "semantic-ui-react";

function manageMenu(props) {
  if (props.stories)
    return props.stories.map(menuItem => {
      return (
        <Menu.Item
          key={menuItem._id}
          href={`/story/${menuItem.code}/page/index`}
        >
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
      <Menu.Item as="a" header href="/addstory">
        Créer un scénario
      </Menu.Item>
      {manageMenu(props)}
    </Container>
  </Menu>
);

export default MenuCompo;
