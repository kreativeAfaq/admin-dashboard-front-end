import React from "react";
import "./topbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Topbar = () => {
  return (
    <div className="main_topbar_container">
      <div className="inner_topbar_container">
        <SearchBox />
        <div className="topbar_call_to_actions">
          <div className="topbar_right_icons">
            {/* SINGLE ICONS */}
            <div className="topbar_right_icon">
              <div className="inner_topbar_right_icon">
                <ion-icon name="chatbubble-ellipses"></ion-icon>
                <div className="topbar_icons_badges"></div>
              </div>
            </div>
            <div className="topbar_right_icon">
              <div className="inner_topbar_right_icon">
                <ion-icon name="notifications"></ion-icon>
                <div className="topbar_icons_badges"></div>
              </div>
            </div>
            {/* SINGLE ICONS */}
          </div>

          {/* CURRENT USER INFO CONTAINER */}

          <div className="topbar_user_bx">
            <div className="topbar_inner_user_bx">
              <div className="user_bx_img">
                <img src={require("../../media/user.jpeg")} alt="" />
              </div>
              <div className="user_bx_details">
                <div className="user_bx_inner_details">
                  <h2>John Doe</h2>
                  <p>Super Admin</p>
                </div>
                <label>
                  <ion-icon name="caret-down-outline"></ion-icon>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
