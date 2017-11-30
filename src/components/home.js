import React, { Component } from "react";
import { Segment, Container } from "semantic-ui-react";

class Home extends Component {
  buildStoryList() {
    if (!this.props || !this.props.stories || this.props.stories === null)
      return <div />;

    console.log("buildStoryList", this.props.stories);
    return this.props.stories.map(story => {
      return (
        <Segment key={story._id} raised color="red">
          <h3>{story.title}</h3>
          <p>{story.summary}</p>
        </Segment>
      );
    });
  }

  render() {
    return (
      <Container className="page_container">
        <h1>Bienvenu sur Zendichron</h1>
        <p>
          Zendichron est votre application de gestion de scénarios pour maitre
          du jeu. Vous pourrez ici géré un scénario en suivant pas à pas les
          différentes étapes.
        </p>
        {this.buildStoryList()}
      </Container>
    );
  }
}

export default Home;
