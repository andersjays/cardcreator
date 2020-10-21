import React, { Component } from 'react'
import { Form, Grid, Image, Segment } from 'semantic-ui-react'
import Coverflow from 'react-coverflow';

const ItemOptions = [
    { value: '/images/item/2018GG WT - Dairy Cow.jpg', text: 'Dairy Cow' },
    { value: '/images/item/2018GG WT - Pair of Chickens.jpg', text: 'Pair of Chickens' },
    { value: '/images/item/2018GG WT - Pair of Pigs.jpg', text: 'Pair of Pigs' }
]
const OccasionOptions = [
    { src: 'bday', value: 'Birthday', text: 'Birthday' },
    { src: 'vl', value: 'Valentines', text: 'Valentines' },
    { src: 'chr', value: 'Christmas', text: 'Christmas' }
]

export default class SendEcard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            occasionSource: '/images/occasion/card-header-thank-you.png'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleChange = (e, {value}) => {
        this.setState({
          itemSource: value
        });
    }
    onChange = (e, {value}) => {
        this.setState({
            donorMessage: value
        });
    }
    handleItemClick = (e) => {
        this.setState({
            occasionSource: e.currentTarget.getAttribute('src')
          });
    }
    render() {
        return(
            <Grid celled='internally'>
                  <Grid.Row>
                    <Grid.Column width={8}>
                    <Form>
                        <Form.Field>
                          <label>Email</label>
                          <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                          <label>Recipient</label>
                          <input placeholder='Recipient' />
                        </Form.Field>
                        <Form.TextArea label='Donor Message' placeholder='Message...' 
                          onChange={this.onChange} />
                        <Form.Field>
                        <label>Occasion</label>
                        <Form.Dropdown
                          placeholder='Occasion'
                          fluid
                          search
                          selection
                          options={OccasionOptions}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label>Item Display</label>
                        <Form.Dropdown
                          placeholder='Item Display'
                          fluid
                          search
                          selection
                          options={ItemOptions}
                          onChange={this.handleChange}
                        />
                        </Form.Field>
                        <Form.Button>End</Form.Button>
                    </Form>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Grid>
                <Grid.Row columns={1}>
                <Grid.Column>
                <Segment>
                <Coverflow
                    displayQuantityOfSide={3}
                    navigation={false}
                    enableHeading={false}
                    infiniteScroll
                    media={{
                      '@media (min-width: 200px)': {
                          width: '50px',
                          height: '100px'
                      },
                      '@media (min-width: 500px)': {
                          width: '100px',
                          height: '100px'
                      },
                      '@media (min-width: 700px)': {
                          width: '200px',
                          height: '100px'
                      },
                      '@media (min-width: 900px)': {
                          width: '350px',
                          height: '100px'
                      },
                      '@media (min-width: 1200px)': {
                        width: '600px',
                        height: '100px'
                      },
                    }}
                    active={0}
                >
                    
                    <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/occasion/card-header-happy-birthday.png' size='small' />
                    <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/occasion/card-header-happy-holidays.png' size='small' />
                    <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/occasion/card-header-thank-you.png' size='small' />
                    <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/occasion/card-header-valentines-day.png' size='small' />
                </Coverflow>
                    </Segment>
                    <Segment>
                    <Grid >
                        <Grid.Row columns={1}>
                          <Grid.Column >
                            <Image style={{margin: 'auto', padding: '10px'}} size="large" src={this.state.occasionSource} />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered columns={1} style={{ paddingTop: '0rem', paddingBottom: '0rem' }}>
                          <Grid.Column style={{ textAlign: 'center', paddingTop: '0rem', paddingBottom: '0rem' }}>
                            <label style={{fontSize: '20px'}}>A life-changing gift has been</label>
                            <br/>
                            <label style={{fontSize: '20px'}}>bought on your behalf!</label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column style={{ textAlign: 'center', paddingTop: '0rem', paddingBottom: '0rem' }}>
                <label style={{fontSize: '20px'}}>{this.state.donorMessage}</label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column>
                            <Image style={{margin: 'auto', padding: '10px'}} size="large" src={this.state.itemSource} />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column>
                          <Image style={{margin: 'auto', padding: '10px'}} size="large" src='/images/email-footer-image.jpg' />
                          </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            
        )
    }
}