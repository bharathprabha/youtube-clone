import React from "react";
import "./Posts.css";
import VideoCards from "./VideoCards";
const Posts = () => {
  return (
    <div className="posts">
      <h2>Recommended</h2>
      <div className="posts__videocards">
        <VideoCards
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="The first  video on youtube"
          chennal="First chennal"
          views="3.4 M"
          timestamp="4 months ago"
          duration="3:50"
        />
        <VideoCards
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="The first  video on youtube"
          chennal="First chennal"
          views="3.4 M"
          timestamp="4 months ago"
          duration="3:50"
        />
        <VideoCards
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="The first  video on youtube"
          chennal="First chennal"
          views="3.4 M"
          timestamp="4 months ago"
          duration="3:50"
        />
        <VideoCards
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="The first  video on youtube"
          chennal="First chennal"
          views="3.4 M"
          timestamp="4 months ago"
          duration="3:50"
        />
        <VideoCards
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="The first  video on youtube"
          chennal="First chennal"
          views="3.4 M"
          timestamp="4 months ago"
          duration="3:50"
        />
        <VideoCards
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="The first  video on youtube"
          chennal="First chennal"
          views="3.4 M"
          timestamp="4 months ago"
          duration="3:50"
        />
      </div>
    </div>
  );
};

export default Posts;
