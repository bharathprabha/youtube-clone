import React, { createContext, useState } from "react";

export const VideoContext = createContext([]);

export const VideoProvider = ({ children }) => {
  const [VideoDetails, setVideoDetails] = useState([]);

  return (
    <VideoContext.Provider value={{ VideoDetails, setVideoDetails }}>
      {children}
    </VideoContext.Provider>
  );
};
