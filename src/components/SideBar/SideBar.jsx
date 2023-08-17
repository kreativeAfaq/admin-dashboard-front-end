import React from "react";
import "./sidebar.scss";
import routes from "../../utils/routes";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  let pathName = location.pathname.split("/").pop();

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
            {routes?.map((item) => {
              return (
                <Link to={item?.route} key={item?.route}>
                  <div
                    className={`sidebar_item_box ${
                      pathName === item?.routeId ? "active" : ""
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
