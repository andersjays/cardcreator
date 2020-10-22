import React, { Component } from "react";
import {
  Form,
  Grid,
  Image,
  Segment,
  Confirm,
  Button,
  Modal
} from "semantic-ui-react";
import Coverflow from "react-coverflow";

const ItemOptions = [
  { value: "/images/item/2018GG WT - Dairy Cow.jpg", text: "Dairy Cow" },
  {
    value: "/images/item/2018GG WT - Pair of Chickens.jpg",
    text: "Pair of Chickens"
  },
  { value: "/images/item/2018GG WT - Pair of Pigs.jpg", text: "Pair of Pigs" }
];
const OccasionOptions = [
  { src: "bday", value: "Birthday", text: "Birthday" },
  { src: "vl", value: "Valentines", text: "Valentines" },
  { src: "chr", value: "Christmas", text: "Christmas" }
];

export default class SendEcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occasionSource: "/images/occasion/card-header-thank-you.png",
      itemSource: "/images/item/2018GG WT - Dairy Cow.jpg",
      activePane: "occassion",
      modalOpen: false
    };
    this.handleOccassionClick = this.handleOccassionClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleChangePane = this.handleChangePane.bind(this);
    this.open = this.open.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }
  handleChangePane = (e) => {
    this.setState({
      activePane: e.currentTarget.getAttribute("pane")
    });
  };
  onChange = (e, { value }) => {
    this.setState({
      donorMessage: value
    });
  };
  handleOccassionClick = (e) => {
    this.setState({
      occasionSource: e.currentTarget.getAttribute("src")
    });
  };
  handleItemClick = (e) => {
    this.setState({
      itemSource: e.currentTarget.getAttribute("src")
    });
  };
  open = () => this.setState({ modalOpen: true });
  cancel = () => this.setState({ modalOpen: false });
  confirm = () => this.setState({ modalOpen: false });
  render() {
    if (this.state.activePane === "occassion") {
      return (
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form>
                <Form.Field>
                  <label>Sender Email</label>
                  <input placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label>Recipient Email</label>
                  <input placeholder="Recipient" />
                </Form.Field>
                <Form.TextArea
                  label="Custom Message"
                  placeholder="Message..."
                  onChange={this.onChange}
                />
                <Modal
                  trigger={<Button>Send</Button>}
                  onOpen={this.open}
                  open={this.state.modalOpen}
                >
                  <Modal.Header>Your card has been created</Modal.Header>
                  <Modal.Content>
                    Your card has been created and will be sent shortly. Do you
                    want to create a new card?
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={this.confirm}>Yes</Button>
                    <Button onClick={this.cancel} positive>
                      I want to re-use my previous design
                    </Button>
                    <Button onClick={this.cancel}>Cancel and Exit</Button>
                  </Modal.Actions>
                </Modal>
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
                          "@media (min-width: 200px)": {
                            width: "50px",
                            height: "100px"
                          },
                          "@media (min-width: 500px)": {
                            width: "100px",
                            height: "100px"
                          },
                          "@media (min-width: 700px)": {
                            width: "200px",
                            height: "100px"
                          },
                          "@media (min-width: 900px)": {
                            width: "350px",
                            height: "100px"
                          },
                          "@media (min-width: 1200px)": {
                            width: "600px",
                            height: "100px"
                          }
                        }}
                        active={0}
                      >
                        <Image
                          onClick={this.handleOccassionClick}
                          onKeyDown={this.handleOccassionClick}
                          src="/images/occasion/card-header-happy-birthday.png"
                          size="small"
                        />
                        <Image
                          onClick={this.handleOccassionClick}
                          onKeyDown={this.handleOccassionClick}
                          src="/images/occasion/card-header-happy-holidays.png"
                          size="small"
                        />
                        <Image
                          onClick={this.handleOccassionClick}
                          onKeyDown={this.handleOccassionClick}
                          src="/images/occasion/card-header-thank-you.png"
                          size="small"
                        />
                        <Image
                          onClick={this.handleOccassionClick}
                          onKeyDown={this.handleOccassionClick}
                          src="/images/occasion/card-header-valentines-day.png"
                          size="small"
                        />
                      </Coverflow>
                    </Segment>
                    <Segment>
                      <Grid>
                        <Grid.Row columns={1}>
                          <Grid.Column
                            onClick={this.handleChangePane}
                            pane="occassion"
                          >
                            <Image
                              style={{
                                margin: "auto",
                                padding: "10px",
                                border: "3px solid #adfc03"
                              }}
                              size="large"
                              src={this.state.occasionSource}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row
                          centered
                          columns={1}
                          style={{ paddingTop: "0rem", paddingBottom: "0rem" }}
                        >
                          <Grid.Column
                            style={{
                              textAlign: "center",
                              paddingTop: "0rem",
                              paddingBottom: "0rem"
                            }}
                          >
                            <label style={{ fontSize: "20px" }}>
                              A life-changing gift has been
                            </label>
                            <br />
                            <label style={{ fontSize: "20px" }}>
                              bought on your behalf!
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column
                            style={{
                              textAlign: "center",
                              paddingTop: "0rem",
                              paddingBottom: "0rem"
                            }}
                          >
                            <label style={{ fontSize: "20px" }}>
                              {this.state.donorMessage}
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row
                          columns={1}
                          onClick={this.handleChangePane}
                          pane="item"
                        >
                          <Grid.Column>
                            <Image
                              style={{ margin: "auto", padding: "10px" }}
                              size="large"
                              src={this.state.itemSource}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column>
                            <Image
                              style={{ margin: "auto", padding: "10px" }}
                              size="large"
                              src="/images/email-footer-image.jpg"
                            />
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
      );
    } else {
      return (
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form>
                <Form.Field>
                  <label>Sender Email</label>
                  <input placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label>Recipient Email</label>
                  <input placeholder="Recipient" />
                </Form.Field>
                <Form.TextArea
                  label="Custom Message"
                  placeholder="Message..."
                  onChange={this.onChange}
                />
                <Modal
                  trigger={<Button>Send</Button>}
                  onOpen={this.open}
                  open={this.state.modalOpen}
                >
                  <Modal.Header>Your card has been created</Modal.Header>
                  <Modal.Content>
                    Your card has been created and will be sent shortly. Do you
                    want to create a new card?
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={this.confirm}>Yes</Button>
                    <Button onClick={this.cancel} positive>
                      I want to re-use my previous design
                    </Button>
                    <Button onClick={this.cancel}>Cancel and Exit</Button>
                  </Modal.Actions>
                </Modal>
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
                          "@media (min-width: 200px)": {
                            width: "50px",
                            height: "100px"
                          },
                          "@media (min-width: 500px)": {
                            width: "100px",
                            height: "100px"
                          },
                          "@media (min-width: 700px)": {
                            width: "200px",
                            height: "100px"
                          },
                          "@media (min-width: 900px)": {
                            width: "350px",
                            height: "100px"
                          },
                          "@media (min-width: 1200px)": {
                            width: "600px",
                            height: "100px"
                          }
                        }}
                        active={0}
                      >
                        <Image
                          onClick={this.handleItemClick}
                          onKeyDown={this.handleItemClick}
                          src="/images/item/2018GG WT - Dairy Cow.jpg"
                          size="small"
                        />
                        <Image
                          onClick={this.handleItemClick}
                          onKeyDown={this.handleItemClick}
                          src="/images/item/2018GG WT - Pair of Chickens.jpg"
                          size="small"
                        />
                        <Image
                          onClick={this.handleItemClick}
                          onKeyDown={this.handleItemClick}
                          src="/images/item/2018GG WT - Pair of Pigs.jpg"
                          size="small"
                        />
                      </Coverflow>
                    </Segment>
                    <Segment>
                      <Grid>
                        <Grid.Row
                          columns={1}
                          onClick={this.handleChangePane}
                          pane="occassion"
                        >
                          <Grid.Column>
                            <Image
                              style={{ margin: "auto", padding: "10px" }}
                              size="large"
                              src={this.state.occasionSource}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row
                          centered
                          columns={1}
                          style={{ paddingTop: "0rem", paddingBottom: "0rem" }}
                        >
                          <Grid.Column
                            style={{
                              textAlign: "center",
                              paddingTop: "0rem",
                              paddingBottom: "0rem"
                            }}
                          >
                            <label style={{ fontSize: "20px" }}>
                              A life-changing gift has been
                            </label>
                            <br />
                            <label style={{ fontSize: "20px" }}>
                              bought on your behalf!
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column
                            style={{
                              textAlign: "center",
                              paddingTop: "0rem",
                              paddingBottom: "0rem"
                            }}
                          >
                            <label style={{ fontSize: "20px" }}>
                              {this.state.donorMessage}
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row
                          columns={1}
                          onClick={this.handleChangePane}
                          pane="item"
                        >
                          <Grid.Column>
                            <Image
                              style={{
                                margin: "auto",
                                padding: "10px",
                                border: "3px solid #adfc03"
                              }}
                              size="large"
                              src={this.state.itemSource}
                            />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column>
                            <Image
                              style={{ margin: "auto", padding: "10px" }}
                              size="large"
                              src="/images/email-footer-image.jpg"
                            />
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
      );
    }
  }
}
