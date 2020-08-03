import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

export const Video = () => {
  const videoStyle = {
    width: "100%",
    hight: "auto",
  };
  const { VideoDetails } = useContext(VideoContext);
  console.log(VideoDetails);
  return (
    <div className="video">
      <video
        className="video__player"
        style={videoStyle}
        src={VideoDetails.videoInfo.img}
        controls
      ></video>
    </div>
  );
};
