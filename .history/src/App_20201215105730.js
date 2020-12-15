import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Index from './pages/Index';
import Page1 from './pages/Page1';
import createBrowserHistory from './history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory}>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/location" exact component={LocationPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
