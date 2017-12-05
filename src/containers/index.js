import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Grid, Button } from "semantic-ui-react";

import { fetchStory } from "../actions/stories";

class IndexPage extends Component {
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

  componentWillMount() {
    console.log(this.props);
    if (!this.props.currentStory) {
      this.props.fetchStory(this.props.match.params.storyCode);
    }
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
                <p>
                  Cette page répertorie toutes les pages du scénario. Vous
                  pouvez ajouter une nouvelle page ici.
                </p>
                <Button primary>Ajouter</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{this.buildPageList}</Grid.Column>
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

export default connect(mapStateToProps, { fetchStory })(IndexPage);
