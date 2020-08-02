import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SmallSideBAr from "./components/SmallSideBAr";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="app__page">
            <Route exact path="/">
              <SideBar />
              <Posts />
            </Route>
            <Route path="/sidebar">
              <SmallSideBAr />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
