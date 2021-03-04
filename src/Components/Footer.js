import {Segment, Grid, Header, List, Container} from 'semantic-ui-react';

function Footer () {

  return (
    <Segment style={{backgroundColor: 'rgb(8, 9, 18)', height: '12.5vh', width: '100%'}}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List inverted link>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List inverted link>
                <List.Item as='a'>Service A</List.Item>
                <List.Item as='a'>Service B</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4'>
                Footer Header
              </Header>
              <p style={{color: 'white'}}>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer;