import React from "react";
import "./VideoCards.css";
import Avatar from "@material-ui/core/Avatar";
const VideoCards = ({ image, title, chennal, views, timestamp, duration }) => {
  return (
    <div className="VideoCard">
      <img className="VideoCard__Thumnill" src={image} alt="" />
      <div className="VideoCard__info">
        <Avatar className="VideoCard__Avatar" />
        <div className="VideoCard__text">
          {" "}
          <h4>{title}</h4>
          <p>{chennal}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
