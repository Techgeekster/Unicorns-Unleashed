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
          <Route exact path="/" component={UnderConstruction} />
          <Route path="/home" component={UnderConstruction} />
          <Route path="/unicorns-unleashed" component={UnderConstruction} />
          <Route path="/race-page/:id" component={UnderConstruction} />
          <Route path="*" component={UnderConstruction} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}