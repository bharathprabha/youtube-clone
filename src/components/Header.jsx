import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <MenuIcon className="header__material__icon" />
      </div>
      <div className="header__input">
        <input type="text" />
        <SearchIcon className="header__material__icon" />
      </div>
      <div className="header__avatar">
        <VideoCallIcon className="header__material__icon" />
        <AppsIcon className="header__material__icon" />
        <NotificationsIcon className="header__material__icon" />
        <Avatar className="header__material__icon" />
      </div>
    </div>
  );
};

export default Header;
