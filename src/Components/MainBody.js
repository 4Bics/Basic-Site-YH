import {Segment} from 'semantic-ui-react';
import BlogPost from '../Components/BlogPost';

function MainBody () {

  return (
    <div style={{backgroundColor: 'white', padding: '100px', height: '75vh', width: '100%'}}>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
    </div>
  )
}

export default MainBody;