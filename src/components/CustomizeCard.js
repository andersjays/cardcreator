import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import { Form, Grid, Image, Segment, Confirm } from 'semantic-ui-react'
import Coverflow from 'react-coverflow';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

export default class CustomizeCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            occasionSource: '/images/occasion/card-header-thank-you.png',
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleChange = (e, {value}) => {
        console.log(e.target.src)
        this.setState({
          itemSource: value
        });
    }
    handleItemClick = (e) => {
        this.setState({
            occasionSource: e.currentTarget.getAttribute('src')
          });
    }

    open = () => this.setState({ open: true })
    cancel = () => this.setState({ open: false })
    confirm = () => {
        this.setState({ open: false })
    }
    render() {
        return(
            <Grid celled='internally'>
                  <Grid.Row>
                    <Grid.Column width={6}>
                    <Form>
                        <Form.Field>
                          <label>Email</label>
                          <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                          <label>To Address</label>
                          <input placeholder='To Address' />
                        </Form.Field>
                        <Form.TextArea label='Message' placeholder='Message...' />
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
                        <Form.Checkbox label='Send Mail' />
                        <Form.Button onClick={this.open}>Submit</Form.Button>
                        <Confirm
                            open={this.state.open}
                            onCancel={this.cancel}
                            onConfirm={this.confirm}
                        />
                    </Form>
                    </Grid.Column>
                    <Grid.Column width={10}>
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
                          width: '150px',
                          height: '100px'
                      },
                      '@media (min-width: 500px)': {
                          width: '200px',
                          height: '100px'
                      },
                      '@media (min-width: 700px)': {
                          width: '300px',
                          height: '100px'
                      },
                      '@media (min-width: 900px)': {
                          width: '450px',
                          height: '100px'
                      },
                      '@media (min-width: 1200px)': {
                        width: '700px',
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
                    <Grid id='PDFwwww'>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Image style={{transform: 'rotate(180deg)'}} src={this.state.occasionSource} />
                          </Grid.Column>
                          <Grid.Column>
                            <Image size="medium" src={this.state.itemSource} />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                          <Image src='/images/print-card-footer.jpg.png' />
                          </Grid.Column>
                          <Grid.Column>
                          <Image src='/images/print-message-footer.png' />
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