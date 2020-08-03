import React from "react";
import { Player } from "video-react";

export const Video = () => {
  return (
    <div className="video">
      <video
        className="video__player"
        src="https://firebasestorage.googleapis.com/v0/b/clone-a3f57.appspot.com/o/videos%2Ffile_example_MP4_480_1_5MG.mp4?alt=media&token=d9b2b17b-24b3-44da-9498-c085278abf13"
        controls
      ></video>
    </div>
  );
};
