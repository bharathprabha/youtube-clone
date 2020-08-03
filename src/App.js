import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SmallSideBAr from "./components/SmallSideBAr";
import AddForm from "./components/AddForm";
import { Video } from "./components/Video";
import { VideoProvider } from "./context/VideoContext";

function App() {
  useEffect(() => {
    alert(
      "Thanks for visiting my project, you can watch videos and add videos in this app"
    );
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="app__page">
            <VideoProvider>
              <Route exact path="/">
                <SideBar />
                <Posts />
              </Route>
              <Route path="/video">
                <Video />
              </Route>
            </VideoProvider>
            <Route path="/sidebar">
              <SmallSideBAr />
            </Route>
            <Route path="/addform">
              <AddForm />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
