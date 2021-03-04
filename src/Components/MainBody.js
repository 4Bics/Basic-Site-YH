import {Divider, Segment} from 'semantic-ui-react';
import BlogPost from '../Components/BlogPost';

function MainBody () {

  return (
    <div style={{backgroundColor: 'white', height: '75vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
        <BlogPost/>
        <Divider/>
        <BlogPost/>
        <Divider/>
        <BlogPost/>
    </div>
  )
}

export default MainBody;