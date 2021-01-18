import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home/home';
import NavBar from './nav-bar/nav-bar';
import RacePage from './race-page/race-page';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/unicorns-unleashed" component={Home} />
          <Route path="/race-page/:id" component={RacePage} />
        </Switch>
      </div>
    </Router>
  );
}