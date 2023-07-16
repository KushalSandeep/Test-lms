import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Lmscontent from "./Lmscontent";
import Calender from "./Calender";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Forum from "./Forum";
import Meetings from "./Meetings";
import Portfolio from "./Portfolio";
import CV from "./CV";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/calender">
            <div className="app__page">
              <Sidebar calender />
              <Calender />
            </div>
          </Route>
          <Route path="/Dashboard">
            <div className="app__page">
              <Sidebar Dashboard />
              <Dashboard />
            </div>
          </Route>
          <Route path="/Courses">
            <div className="app__page">
              <Sidebar Courses />
              <Courses />
            </div>
          </Route>
          <Route path="/Forum">
            <div className="app__page">
              <Sidebar Forum />
              <Forum />
            </div>
          </Route>
          <Route path="/Meetings">
            <div className="app__page">
              <Sidebar Meetings />
              <Meetings />
            </div>
          </Route>
          <Route path="/Portfolio">
            <div className="app__page">
              <Sidebar Portfolio />
              <Portfolio />
            </div>
          </Route>
          <Route path="/CV">
            <div className="app__page">
              <Sidebar CV />
              <CV />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar Home />
              <Lmscontent />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
