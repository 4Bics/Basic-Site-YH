import {Grid, Segment, Icon} from 'semantic-ui-react';

function BlogPost () {

  return (
    <Segment style={{backgroundColor: 'rgb(8, 9, 18)', margin: '15px 200px', padding: '65px', borderRadius: '10px'}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <p style={{color: 'white'}}>Blog image here</p>
            <Icon inverted name='user outline'/>
          </Grid.Column>
          <Grid.Column width={9}>
            <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam dui. Cras turpis diam, pulvinar et purus et, feugiat condimentum est. In pretium sagittis purus. Phasellus consectetur enim nisi, vel ultrices libero sodales eget. Sed fringilla vulputate est quis luctus. Aliquam erat volutpat. Suspendisse finibus arcu ac nibh tristique, ut aliquam velit tincidunt. Vivamus tortor felis, tincidunt quis dignissim ac, vulputate egestas purus. Nam rhoncus fermentum hendrerit. Aliquam facilisis turpis at sagittis auctor. Morbi vulputate vulputate massa et pulvinar. Curabitur malesuada a leo et varius. Phasellus vulputate sapien eget elementum scelerisque. Praesent in pharetra ex. Etiam vel urna scelerisque, blandit libero ac, tempor nunc.</p>
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