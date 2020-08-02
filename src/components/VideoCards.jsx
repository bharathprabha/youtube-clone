import React from "react";
import "./VideoCards.css";
import Avatar from "@material-ui/core/Avatar";
const VideoCards = ({ videoInfo }) => {
  return (
    <div className="VideoCard">
      <img className="VideoCard__Thumnill" src={videoInfo.img} alt="" />
      <div className="VideoCard__info">
        <Avatar className="VideoCard__Avatar" />
        <div className="VideoCard__text">
          <h4>{videoInfo.title}</h4>
          <p>{videoInfo.chennal}</p>
          <p>{/* {views} * {timestamp} */}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
