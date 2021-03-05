import {Divider, Segment} from 'semantic-ui-react';
import BlogPost from '../Components/BlogPost';
import TextContainer from './AboutContainer';

function MainBody () {

  return (
    <div style={{backgroundColor: 'white', height: '75vh', width: '100%', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between', overflow: 'scroll'}}>
        <TextContainer/>
        <Divider/>
        <BlogPost/>
        <BlogPost/>
    </div>
  )
}

export default MainBody;