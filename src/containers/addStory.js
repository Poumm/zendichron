import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form } from "semantic-ui-react";

import { addStory } from "../actions/index";

class AddStory extends Component {
  render() {
    return (
      <Container>
        <Form onSubmit={this.props.addStory}>
          <Form.Input label="Titre" placeholder="Titre" />
          <Form.Checkbox label="Officiel" />
          <Form.TextArea label="Résumé" placeholder="Résumé" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { addStory })(AddStory);
