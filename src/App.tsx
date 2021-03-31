import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
