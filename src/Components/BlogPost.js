import {Grid} from 'semantic-ui-react';

function BlogPost () {

  return (
    <Grid>
      <Grid.Column width={4}>
        <p>Blog image here</p>
      </Grid.Column>
      <Grid.Column width={9}>
        <p>Blog text here</p>
      </Grid.Column>
      <Grid.Column width={3}>
        <p>Blog sources / authors here</p>
      </Grid.Column>
    </Grid>
  )
}

export default BlogPost;