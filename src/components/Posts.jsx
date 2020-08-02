import React from "react";
import "./Posts.css";
import VideoCards from "./VideoCards";
import { db } from "../firebase.js";
import { useState, useEffect } from "react";

const Posts = () => {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snopshot) => {
      setVideos(snopshot.docs.map((doc) => ({ post: doc.data(), id: doc.id })));
    });
  }, []);
  console.log(Videos);
  return (
    <div className="posts">
      <h2>Recommended</h2>
      <div className="posts__videocards">
        {Videos.map((videos) => (
          <VideoCards key={videos.id} videoInfo={videos.post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
