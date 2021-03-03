import {Container} from 'semantic-ui-react';
import Footer from '../Components/Footer';
import MainPageHeader from '../Components/MainHeader';
import MainBody from '../Components/MainBody';

function MainContainer () {

  return (
      <Container fluid>
        <MainPageHeader/>
        <MainBody/>
        <Footer/>
      </Container>
  );
};

export default MainContainer;