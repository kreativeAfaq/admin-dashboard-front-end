import React from "react";
import "./sidebar.scss";
import routes from "../../utils/routes";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="main_sidebar_container">
      <div className="inner_sidebar_container">
        <div className="sidebar_logo_container">
          <h2>
            <span>e</span>- Learning
          </h2>
        </div>

        <div className="sidebar_items_container">
          <div className="side_bar_nav_items">
            {/* NAV ITEM BX */}
            {routes?.map((item) => {
              return (
                <Link to={item?.route} key={item?.route}>
                  <div
                    className={`sidebar_item_box ${
                      window.location.pathname === item?.route ? "active" : ""
                    }`}
                  >
                    <label>
                      <ion-icon name={item?.icon}></ion-icon>
                    </label>
                    <h4>{item?.label}</h4>
                  </div>
                </Link>
              );
            })}

            {/* NAV ITEM BX */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
