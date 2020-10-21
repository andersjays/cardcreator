
import React, { Component } from 'react'
import { Grid, Image, Header, Icon, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    return (    
        <Grid divided>
          <Grid.Row className='Grid-navbar-padding' columns={1}>
          <Grid.Column>
            <Segment vertical className='Segment-navbar-padding'>
            </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='Grid-navbar-padding' columns={1}>
          <Grid.Column>
            <Segment vertical className='Segment-navbar-padding1'>
            </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} className='Grid-navbar-padding'>
          <Grid.Column>
            <Header as='h2' dividing className='Header-navbar'>
                <Icon name='food' />
            <Header.Content>
              Food For The Hungry
              <Header.Subheader>Customize Card</Header.Subheader>
            </Header.Content>
            </Header>
          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}