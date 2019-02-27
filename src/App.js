import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav/NavBar/NavBar';

import HomePage from './home/HomePage';
import EventDashboard from './events/EventDashboard/EventDashboard';
import EventDetailedPage from './events/EventDetailed/EventDetailedPage';
import PeopleDashboard from './user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './user/UserDetailed/UserDetailedPage';
import SettingsDashboard from './user/Settings/SettingsDashboard';
import EventForm from './events/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route
          path='/(.+)'
          render={() => (
            <div>
              <NavBar />
              <Container className='main'>
                <Switch>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </>
    );
  }
}

export default App;
