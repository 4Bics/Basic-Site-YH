import {Container, Segment, Tab} from 'semantic-ui-react';

function AboutContainer () {

  const panes = [
    { menuItem: 'What is YourHealth', render: () => <Tab.Pane>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam dui. Cras turpis diam, pulvinar et purus et, feugiat condimentum est. In pretium sagittis purus. Phasellus consectetur enim nisi, vel ultrices libero sodales eget. Sed fringilla vulputate est quis luctus. Aliquam erat volutpat. Suspendisse finibus arcu ac nibh tristique, ut aliquam velit tincidunt. Vivamus tortor felis, tincidunt quis dignissim ac, vulputate egestas purus. Nam rhoncus fermentum hendrerit. Aliquam facilisis turpis at sagittis auctor. Morbi vulputate vulputate massa et pulvinar. Curabitur malesuada a leo et varius. Phasellus vulputate sapien eget elementum scelerisque. Praesent in pharetra ex. Etiam vel urna scelerisque, blandit libero ac, tempor nunc.</Tab.Pane> },
    { menuItem: 'What do we do', render: () => <Tab.Pane>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam dui. Cras turpis diam, pulvinar et purus et, feugiat condimentum est. In pretium sagittis purus. Phasellus consectetur enim nisi, vel ultrices libero sodales eget. Sed fringilla vulputate est quis luctus. Aliquam erat volutpat. Suspendisse finibus arcu ac nibh tristique, ut aliquam velit tincidunt. Vivamus tortor felis, tincidunt quis dignissim ac, vulputate egestas purus. Nam rhoncus fermentum hendrerit. Aliquam facilisis turpis at sagittis auctor. Morbi vulputate vulputate massa et pulvinar. Curabitur malesuada a leo et varius. Phasellus vulputate sapien eget elementum scelerisque. Praesent in pharetra ex. Etiam vel urna scelerisque, blandit libero ac, tempor nunc.</Tab.Pane> },
    { menuItem: 'What do you do', render: () => <Tab.Pane>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam dui. Cras turpis diam, pulvinar et purus et, feugiat condimentum est. In pretium sagittis purus. Phasellus consectetur enim nisi, vel ultrices libero sodales eget. Sed fringilla vulputate est quis luctus. Aliquam erat volutpat. Suspendisse finibus arcu ac nibh tristique, ut aliquam velit tincidunt. Vivamus tortor felis, tincidunt quis dignissim ac, vulputate egestas purus. Nam rhoncus fermentum hendrerit. Aliquam facilisis turpis at sagittis auctor. Morbi vulputate vulputate massa et pulvinar. Curabitur malesuada a leo et varius. Phasellus vulputate sapien eget elementum scelerisque. Praesent in pharetra ex. Etiam vel urna scelerisque, blandit libero ac, tempor nunc.</Tab.Pane> },
  ]

  return (
    <Container style={{margin: '40px 0px'}}>
        <Tab panes={panes}/>
    </Container>
  )
}

export default AboutContainer;