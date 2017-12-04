import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form } from "semantic-ui-react";

import { addStory } from "../actions/index";

class AddStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isOfficial: false,
      summary: ""
    };
  }

  onChange(e, { name, value, checked }) {
    if (checked || checked === false) {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  onSubmit() {
    const { title, summary } = this.state;
    if (!title || title.length < 4) {
      alert("Le titre doit faire plus de 3 charactères");
      return;
    }
    if (!summary) {
      alert("Le résumer ne doit pas faire être vide");
      return;
    }
    this.props.addStory(this.state, this);
    this.setState({
      title: "",
      isOfficial: false,
      summary: ""
    });
  }

  render() {
    const { title, isOfficial, summary } = this.state;
    return (
      <Container>
        <h1>Créer un nouveau sénario.</h1>
        Cet action va aussi créer automatiquement la page d'index.
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Checkbox
            label="Officiel"
            name="isOfficial"
            checked={isOfficial}
            onChange={this.onChange.bind(this)}
          />
          <Form.Input
            label="Titre"
            placeholder="Titre"
            name="title"
            value={title}
            onChange={this.onChange.bind(this)}
          />
          <Form.TextArea
            label="Résumé"
            placeholder="Résumé"
            name="summary"
            value={summary}
            onChange={this.onChange.bind(this)}
          />
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
