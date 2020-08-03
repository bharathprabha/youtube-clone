import React, { useContext } from "react";
import "./VideoCards.css";
import Avatar from "@material-ui/core/Avatar";
import { VideoContext } from "../context/VideoContext";
import { Link } from "react-router-dom";

const VideoCards = ({ videoInfo }) => {
  const { setVideoDetails } = useContext(VideoContext);
  const handleClick = () => {
    // console.log(videoInfo);
    setVideoDetails({ videoInfo });
  };
  return (
    <div className="videCards__link">
      <Link to="/video" onClick={handleClick}>
        <div className="VideoCard">
          <video className="VideoCard__Thumnill" src={videoInfo.img}></video>
          <div className="VideoCard__info">
            <Avatar className="VideoCard__Avatar" />
            <div className="VideoCard__text">
              <h4>{videoInfo.title}</h4>
              <p>30K views * 3 months ago</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCards;
