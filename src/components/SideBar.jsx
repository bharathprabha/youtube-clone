import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SideBarRow from "./SideBarRow";
const SideBar = () => {
  return (
    <div className="SideBar">
      <SideBarRow selected Icon={HomeIcon} title={"Home"} />
      <SideBarRow Icon={WhatshotIcon} title={"Trending"} />
      <SideBarRow Icon={SubscriptionsIcon} title={"Sub"} />
      <hr />
    </div>
  );
};

export default SideBar;
