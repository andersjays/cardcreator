import React, { Component } from "react";
import { Grid, Image, Header, Icon, Segment } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    return (
      <Grid>
        {/* <Grid.Row className="Grid-navbar-padding" columns={1}>
          <Grid.Column>
            <Segment vertical className="Segment-navbar-padding"></Segment>
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row className="Grid-navbar-padding" columns={1}>
          <Grid.Column>
            <Segment padded className="Segment-navbar-padding1">
              <Image
                src="/f4h.png"
                size="small"
                floated="right"
                className="logo"
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="Grid-navbar-padding">
          <Grid.Column>
            <Header as="h3" className="Header-navbar">
              CREATE YOUR OWN CARD
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
