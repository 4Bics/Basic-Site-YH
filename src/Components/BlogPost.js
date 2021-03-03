import {Grid, Segment} from 'semantic-ui-react';

function BlogPost () {

  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>Blog image here</p>
          </Grid.Column>
          <Grid.Column width={9}>
            <p>Blog text here</p>
            <p>This is my first blog post and I'm going to be talking to you about gut health</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>Blog sources / authors here</p>
            <p>Hi I'm Emily Doran and I like writing about nutrition</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default BlogPost;