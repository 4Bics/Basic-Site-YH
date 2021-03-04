import {Container} from 'semantic-ui-react';
import Footer from '../Components/Footer';
import MainHeader from '../Components/MainHeader';
import MainBody from '../Components/MainBody';

function MainContainer () {

  return (
      <div>
        <MainHeader/>
        <MainBody/>
        <Footer/>
      </div>
  );
};

export default MainContainer;