import {Segment, Grid, Header, List, Container} from 'semantic-ui-react';

function Footer () {

  return (
    // <Segment>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List inverted link>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List inverted link>
                <List.Item as='a'>Banana Pre-Order</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4'>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    // </Segment>
  )
}

export default Footer;