import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./app.scss";
import NavBar from "./nav-bar/nav-bar";
import Footer from "./footer/footer";
import Home from "./home/home";
import RacePage from "./race-page/race-page";
import UnderConstruction from "./under-construction";

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/unicorns-unleashed" component={Home} />
          <Route path="/race-page/:id" component={RacePage} />
          <Route path="*" component={UnderConstruction} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}