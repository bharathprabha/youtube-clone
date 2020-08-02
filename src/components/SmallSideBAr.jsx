import React from "react";
import "./SmallSideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import SideBarRow from "./SideBarRow";
import { Link } from "react-router-dom";

const SmallSideBAr = () => {
  return (
    <div className="smallsidebar">
      <Link to="/">
        <SideBarRow selected Icon={HomeIcon} title={"Home"} />
      </Link>

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
      <SideBarRow Icon={YouTubeIcon} title={"YouTube Premium"} />
      <SideBarRow Icon={LocalMoviesIcon} title={"Movies"} />
      <SideBarRow Icon={SportsEsportsIcon} title={"Gaming"} />
      <SideBarRow Icon={LiveTvIcon} title={"Live"} />
      <SideBarRow Icon={EmojiObjectsIcon} title={"Learning"} />
      <SideBarRow Icon={SettingsIcon} title={"Settings"} />
      <hr />
      <SideBarRow Icon={FlagIcon} title={"Report History"} />
      <SideBarRow Icon={HelpOutlineIcon} title={"Help"} />
      <SideBarRow Icon={EmojiFlagsIcon} title={"Send Feedback"} />
    </div>
  );
};

export default SmallSideBAr;
