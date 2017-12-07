import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Grid, Form } from "semantic-ui-react";

import { fetchStory } from "../actions/stories";
import { addPage } from "../actions/pages";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  componentWillMount() {
    if (!this.props.currentStory) {
      this.props.fetchStory(this.props.match.params.storyCode);
    }
  }

  buildPageList() {
    if (!this.props.currentStory) return <div />;

    return this.props.currentStory.map(page => {
      return (
        <Segment key={page._id} raised color="blue">
          <h3>{page.title}</h3>
        </Segment>
      );
    });
  }

  onChange(e, { name, value, checked }) {
    this.setState({ [name]: value });
  }

  onSubmit() {
    if (!this.state || this.state.length < 4) {
      alert("Le titre doit faire plus de 3 charactères");
      return;
    }

    this.props.addPage(this.props.currentStory, this.state, this);
    this.setState({
      title: ""
    });
  }

  render() {
    const currentStory = this.props.currentStory;

    if (currentStory) {
      return (
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h1>{currentStory.title}</h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <p>{currentStory.summary}</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form onSubmit={this.onSubmit.bind(this)}>
                  <p>
                    Cette page répertorie toutes les pages du scénario. Vous
                    pouvez ajouter une nouvelle page ici.
                  </p>
                  <Form.Input
                    label="Titre"
                    placeholder="Titre"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange.bind(this)}
                  />
                  <Form.Button>Ajouter</Form.Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div>{this.buildPageList}</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      );
    } else return <div>Chargement...</div>;
  }
}

function mapStateToProps(state) {
  return { currentStory: state.data.currentStory };
}

export default connect(mapStateToProps, { fetchStory, addPage })(IndexPage);
