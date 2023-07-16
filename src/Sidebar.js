import React, { Fragment } from "react";
import SidebarRow from "./SidebarRow";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import DescriptionIcon from "@material-ui/icons/Description";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CalendarTodaySharpIcon from "@material-ui/icons/CalendarTodaySharp";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import Media from "react-media";

function Sidebar(props) {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 550px)",
          medium: "(min-width: 550px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div className="sidebar">
                <Link to="/" className="Links">
                  <SidebarRow selected={props.Home} Icon={HomeIcon} />
                </Link>
                <Link to="/Dashboard" className="Links">
                  <SidebarRow
                    selected={props.Dashboard}
                    Icon={DashboardRoundedIcon}
                  />
                </Link>
                <Link to="/Courses" className="Links">
                  <SidebarRow
                    selected={props.Courses}
                    Icon={AccountBalanceWalletIcon}
                  />
                </Link>
                <Link to="/calender" className="Links">
                  <SidebarRow
                    selected={props.calender}
                    Icon={CalendarTodaySharpIcon}
                  />
                </Link>
                <Link to="/Forum" className="Links">
                  <SidebarRow selected={props.Forum} Icon={ForumSharpIcon} />
                </Link>
                <Link to="/Meetings" className="Links">
                  <SidebarRow
                    selected={props.Meetings}
                    Icon={MeetingRoomIcon}
                  />
                </Link>
                <Link to="/Attendance" className="Links">
                  <SidebarRow
                    selected={props.Meetings}
                    Icon={MeetingRoomIcon}
                  />
                </Link>
                <Link to="/Library" className="Links">
                  <SidebarRow
                    selected={props.Meetings}
                    Icon={MeetingRoomIcon}
                  />
                </Link>
                <Link to="/Portfolio" className="Links">
                  <SidebarRow
                    selected={props.Portfolio}
                    Icon={AssignmentIcon}
                  />
                </Link>
                <Link to="/CV" className="Links">
                  <SidebarRow selected={props.CV} Icon={DescriptionIcon} />
                </Link>
              </div>
            )}
            {matches.medium && (
              <div className="sidebar">
                <Link to="/" className="Links">
                  <SidebarRow
                    selected={props.Home}
                    Icon={HomeIcon}
                    title="Home"
                  />
                </Link>
                <Link to="/Dashboard" className="Links">
                  <SidebarRow
                    selected={props.Dashboard}
                    Icon={DashboardRoundedIcon}
                    title="Dashboard"
                  />
                </Link>
                <Link to="/Courses" className="Links">
                  <SidebarRow
                    selected={props.Courses}
                    Icon={AccountBalanceWalletIcon}
                    title="Courses"
                  />
                </Link>
                <Link to="/calender" className="Links">
                  <SidebarRow
                    selected={props.calender}
                    Icon={CalendarTodaySharpIcon}
                    title="Calander"
                  />
                </Link>
                <Link to="/Forum" className="Links">
                  <SidebarRow
                    selected={props.Forum}
                    Icon={ForumSharpIcon}
                    title="Forum"
                  />
                </Link>
                <Link to="/Meetings" className="Links">
                  <SidebarRow
                    selected={props.Meetings}
                    Icon={MeetingRoomIcon}
                    title="Meetings"
                  />
                </Link>
                <Link to="/Attendance" className="Links">
                  <SidebarRow
                    selected={props.Meetings}
                    Icon={MeetingRoomIcon}
                    title="Attendance"
                  />
                </Link>
                <Link to="/Library" className="Links">
                  <SidebarRow
                    selected={props.Meetings}
                    Icon={MeetingRoomIcon}
                    title="Library"
                  />
                </Link>
                <Link to="/Portfolio" className="Links">
                  <SidebarRow
                    selected={props.Portfolio}
                    Icon={AssignmentIcon}
                    title="Portfolio"
                  />
                </Link>
                <Link to="/CV" className="Links">
                  <SidebarRow
                    selected={props.CV}
                    Icon={DescriptionIcon}
                    title="CV"
                  />
                </Link>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default Sidebar;
