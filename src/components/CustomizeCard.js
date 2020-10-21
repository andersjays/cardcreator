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
];
const OccasionOptions = [
    { src: 'bday', value: 'Birthday', text: 'Birthday' },
    { src: 'vl', value: 'Valentines', text: 'Valentines' },
    { src: 'chr', value: 'Christmas', text: 'Christmas' }
];

export default class CustomizeCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            occasionSource: '/images/occasion/card-header-thank-you.png',
            itemSource: '/images/item/2018GG WT - Dairy Cow.jpg',
            activePane: 'occassion',
            open: false
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleOccassionClick = this.handleOccassionClick.bind(this);
        this.handleChangePane = this.handleChangePane.bind(this);
    }
    handleOccassionClick = (e) => {
        this.setState({
            occasionSource: e.currentTarget.getAttribute('src')
          });
    };
    handleItemClick = (e) => {
        this.setState({
            itemSource: e.currentTarget.getAttribute('src')
        });
    };
    handleChangePane = (e) => {
        this.setState({
            activePane: e.currentTarget.getAttribute('pane')
        });
    };
    open = () => this.setState({ open: true })
    cancel = () => this.setState({ open: false })
    confirm = () => {
        this.setState({ open: false })
    };
    render() {
        if(this.state.activePane === 'occassion'){
            return(
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Form>
                                <Form.Field>
                                    <label>Sender Email</label>
                                    <input placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Recipient Mailing Address</label>
                                    <input placeholder='Mailing Address' />
                                </Form.Field>
                                <Form.TextArea label='Custom Message' placeholder='Message...' />
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
                                            <Coverflow class="tempo"
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
                                                <Image onClick={this.handleOccassionClick}  onKeyDown={this.handleOccassionClick} src='/images/occasion/card-header-happy-birthday.png' size='small' />
                                                <Image onClick={this.handleOccassionClick}  onKeyDown={this.handleOccassionClick} src='/images/occasion/card-header-happy-holidays.png' size='small' />
                                                <Image onClick={this.handleOccassionClick}  onKeyDown={this.handleOccassionClick} src='/images/occasion/card-header-thank-you.png' size='small' />
                                                <Image onClick={this.handleOccassionClick}  onKeyDown={this.handleOccassionClick} src='/images/occasion/card-header-valentines-day.png' size='small' />
                                            </Coverflow>
                                        </Segment>
                                        <Segment>
                                            <Grid>
                                                <Grid.Row columns={2}>
                                                    <Grid.Column onClick={this.handleChangePane} pane="occassion">
                                                        <Image style={{transform: 'rotate(180deg)', border: '3px solid #adfc03'}} src={this.state.occasionSource} />
                                                    </Grid.Column>
                                                    <Grid.Column onClick={this.handleChangePane} pane="items">
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
        }else{
            return(
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Form>
                                <Form.Field>
                                    <label>Sender Email</label>
                                    <input placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Recipient Mailing Address</label>
                                    <input placeholder='To Address' />
                                </Form.Field>
                                <Form.TextArea label='Custom Message' placeholder='Message...' />
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
                                                <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/item/2018GG WT - Dairy Cow.jpg' size='small' />
                                                <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/item/2018GG WT - Pair of Chickens.jpg' size='small' />
                                                <Image onClick={this.handleItemClick}  onKeyDown={this.handleItemClick} src='/images/item/2018GG WT - Pair of Pigs.jpg' size='small' />
                                            </Coverflow>
                                        </Segment>
                                        <Segment>
                                            <Grid>
                                                <Grid.Row columns={2}>
                                                    <Grid.Column onClick={this.handleChangePane} pane="occassion">
                                                        <Image style={{transform: 'rotate(180deg)'}} src={this.state.occasionSource} />
                                                    </Grid.Column>
                                                    <Grid.Column onClick={this.handleChangePane} pane="item">
                                                        <Image size="medium" src={this.state.itemSource} style={{border: '3px solid #adfc03'}}/>
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
}
