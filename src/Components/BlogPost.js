import {Grid, Segment, Icon} from 'semantic-ui-react';

function BlogPost () {

  return (
    <Segment style={{backgroundColor: 'rgb(8, 9, 18)', border: 'white 1px solid', margin: '30px 200px', padding: '65px', borderRadius: '10px'}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <p style={{color: 'white'}}>Blog image here</p>
            <Icon inverted name='user outline'/>
          </Grid.Column>
          <Grid.Column width={9}>
            <p style={{color: 'white'}}>Blog text here</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p style={{color: 'white'}}>Blog sources / authors here</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default BlogPost;