import React, { Component } from 'react'
import { Grid, Menu, Segment, Image, Divider } from 'semantic-ui-react'
import CustomizeCard from './CustomizeCard';
import SendEcard from './SendEcard';

export default class Main extends Component {
  state = { activeItem: 'PDF' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    if (activeItem === 'PDF'){
        return (
            <Grid divided>
            <Grid.Row className='Grid-main-padding' columns={1}>
            <Grid.Column>
              <Menu attached='top' tabular>
                  <Menu.Item
                      name='PDF'
                      active={activeItem === 'PDF'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='e-card'
                      active={activeItem === 'e-card'}
                      onClick={this.handleItemClick}
                  />
              </Menu>
              <Segment>
              <CustomizeCard />
                
              </Segment>
          </Grid.Column>
          </Grid.Row>
          </Grid>
      )
    }else{
        return (
          <Grid divided>
          <Grid.Row className='Grid-main-padding' columns={1}>
          <Grid.Column>
            <Menu attached='top' tabular>
                <Menu.Item
                    name='PDF'
                    active={activeItem === 'PDF'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='e-card'
                    active={activeItem === 'e-card'}
                    onClick={this.handleItemClick}
                />
            </Menu>
            <Segment>
            <SendEcard />
              </Segment>
          </Grid.Column>
          </Grid.Row>
          </Grid>
        )
    }
  }
}
