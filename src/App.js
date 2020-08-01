import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <SideBar />
        <Posts />
      </div>
    </div>
  );
}

export default App;
