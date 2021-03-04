import {Header, Segment} from 'semantic-ui-react';

function MainHeader () {

  return (
    <div style={{backgroundColor: 'rgb(8, 9, 18)', width: '100%', padding: '40px', height: '12.5vh'}}>
      <Header content='Main Header' style={{color: 'white', marginLeft: '180px'}}/>
    </div>
  )
}

export default MainHeader;