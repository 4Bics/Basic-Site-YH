import {Header, Segment} from 'semantic-ui-react';

function MainHeader () {

  return (
    <div style={{backgroundColor: 'rgb(8, 9, 18)', width: '100%', padding: '40px', height: '12.5vh'}}>
      <Header as='h1' content='YourHealth' style={{color: 'white', fontSize: '50px', width: 'fit-content'}}>
        YourHealth
        <Header.Subheader style={{color: 'white'}}>Using data to fine tune your lifestyle.</Header.Subheader>
      </Header>
    </div>
  )
}

export default MainHeader;