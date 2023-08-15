import React from "react";
import "./layout.scss";
import SideBar from "../components/SideBar/SideBar";
import Topbar from "../components/Topbar/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="mainDashboardLayoutContainer">
      <div className="innerDashboardLayout">
        <SideBar />
        <div className="mainDahboardContent">
          <div className="topbar_layout_container">
            <Topbar />
          </div>
          <div className="content_layout_container">
            <div className="inner_content_layout">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
