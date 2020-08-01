import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import SideBarRow from "./SideBarRow";

const SideBar = () => {
  return (
    <div className="SideBar">
      <SideBarRow selected Icon={HomeIcon} title={"Home"} />
      <SideBarRow Icon={WhatshotIcon} title={"Trending"} />
      <SideBarRow Icon={SubscriptionsIcon} title={"Sub"} />
      <hr />
      <SideBarRow Icon={LibraryAddIcon} title={"Library"} />
      <SideBarRow Icon={HistoryIcon} title={"History"} />
      <SideBarRow Icon={VideoLibraryIcon} title={"Your videos"} />
      <SideBarRow Icon={AccessTimeIcon} title={"Watch later"} />
      <SideBarRow Icon={MenuOpenIcon} title={"Popular videos"} />
      <SideBarRow Icon={ThumbUpAltIcon} title={"Liked videos"} />
      <hr />
    </div>
  );
};

export default SideBar;
