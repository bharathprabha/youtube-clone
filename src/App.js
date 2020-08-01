import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Posts />
    </div>
  );
}

export default App;
