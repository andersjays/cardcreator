import React, { Component } from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import Coverflow from 'react-coverflow';
  
export default class PdfPreview extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pdfSource: '/images/item/2018GG WT - Pair of Chickens.jpg'
        }
    }
    handleItemClick = (e) => {
        this.setState({
            pdfSource: e.currentTarget.getAttribute('src')
          });
    }
    render() {
        
        return(
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
                          <Grid.Column>
                            <Image src={this.props.occasionSource} />
                          </Grid.Column>
                          <Grid.Column>
                            <Image src={this.state.pdfSource} />
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Image src='/images/print-card-footer.jpg.png' />
                          </Grid.Column>
                          <Grid.Column>
                            
                          </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}