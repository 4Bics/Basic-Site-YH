import {Divider, Segment} from 'semantic-ui-react';
import BlogPost from '../Components/BlogPost';
import AboutContainer from './AboutContainer';
import AboutAccordion from './AboutContainer2';
import OpeningSection from './OpeningSection';

function MainBody () {

  return (
    <div style={{backgroundColor: 'rgb(8, 9, 18)', width: '100%', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between'}}>
        <OpeningSection/>
        <Divider hidden/>
        <AboutAccordion/>
        <Divider hidden/>
        <BlogPost/>
    </div>
  )
};

export default MainBody;