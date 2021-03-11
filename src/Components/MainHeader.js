import {Header, Segment, Button} from 'semantic-ui-react';

function MainHeader () {

  return (
    <div style={{backgroundColor: 'rgb(8, 9, 18)', width: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div>
        <Header as='h3' style={{color: 'white', fontSize: '30px', width: 'fit-content', fontFamily: 'Prompt, sans-serif'}}>
          YOOR HEALTH
          <Header.Subheader style={{color: 'white'}}>Using data to fine tune your lifestyle.</Header.Subheader>
        </Header>
      </div>
      <div>
        <Button basic compact inverted style={{fontFamily: 'Prompt, sans-serif'}}>Register Interest</Button>
      </div>
    </div>
  )
}

export default MainHeader;