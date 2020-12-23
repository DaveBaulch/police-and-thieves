import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import IndexPage from '../../pages/IndexPage';
import LocationPage from '../../pages/LocationPage';
import OfficersPage from '../../pages/OfficersPage';
import SearchesPage from '../../pages/SearchesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import createBrowserHistory from '../../history';
import './css/site.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory}>
          <Header />
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/location" exact component={LocationPage} />
            <Route path="/officers/:id" exact component={OfficersPage} />
            <Route path="/searches/:id" exact component={SearchesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
