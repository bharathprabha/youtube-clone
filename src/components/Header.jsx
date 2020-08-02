import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <Link to="/sidebar">
          <MenuIcon className="header__material__icon" />
        </Link>
      </div>
      <div className="header__input">
        <input type="text" placeholder="search" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__avatar">
        <Link to="/addform">
          <Button
            className="header__addButton"
            variant="contained"
            color="secondary"
          >
            Secondary
          </Button>
        </Link>

        <VideoCallIcon className="header__material__icon" />
        <AppsIcon className="header__material__icon" />
        <NotificationsIcon className="header__material__icon" />
        <Avatar className="header__material__icon" />
      </div>
      <div className="header__addbutton">
        <Link to="/addform">
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Link>
      </div>

      <div className="header__small__avatar">
        <Avatar className="header__small__avatar__icon" />
      </div>
    </div>
  );
};

export default Header;
