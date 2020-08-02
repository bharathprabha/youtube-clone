import React from "react";
import "./Posts.css";
import VideoCards from "./VideoCards";
import { db } from "../firebase.js";
import { useState, useEffect } from "react";

const Posts = () => {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snopshot) => {
      setVideos(snopshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(Videos);
  return (
    <div className="posts">
      <h2>Recommended</h2>
      <div className="posts__videocards">
        {Videos.map((videos) => (
          <VideoCards key={videos.title} videoInfo={videos} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
