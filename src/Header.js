import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Sidebar from "./Sidebar";

function Header() {
  const [avstate, setavstate] = useState(false);
  const [msgstate, setmsgstate] = useState(false);
  const [notistate, setnotistate] = useState(false);

  return (
    <div className="header">
      <div className="header__left">
        <div className="mmicon">
          <MenuIcon className="micon" />
        </div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://lms.sltc.ac.lk/pluginfile.php/1/theme_moove/logo/1636168546/New%20-%20Copy.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__Middle"></div>
      <div className="header__right">
        <NotificationsIcon
          className="header__icon"
          onClick={() => setnotistate(!notistate)}
        />
        {notistate ? (
          <div className="notigp">
            <div class="arrow-up2"></div>
            <div className="noticon">
              <li className="Prof">Notifications</li>
            </div>
          </div>
        ) : null}
        <ChatIcon
          className="header__icon"
          onClick={() => setmsgstate(!msgstate)}
        />
        {msgstate ? (
          <div className="massagegp">
            <div class="arrow-up"></div>
            <div className="chaticon">
              <li className="Prof">Massages</li>
            </div>
          </div>
        ) : null}
        <SettingsIcon className="header__icon" />
        <div>
          <Avatar
            alt=""
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            className="header__icon"
            onClick={() => setavstate(!avstate)}
          />

          {avstate ? (
            <div className="avtdd">
              <li className="Prof">Full Name and Number</li>
              <Link to="/Dashboard" className="aLink">
                <li>Dashboard</li>
              </Link>
              <li>Profile</li>
              <li>Grades</li>
              <li>Settings</li>
              <li className="lgout">
                <ExitToAppIcon className="lgouticon" />
                Log out
              </li>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
