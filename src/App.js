import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </>
    );
  }
}

export default App;
