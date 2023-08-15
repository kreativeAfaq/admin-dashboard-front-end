import React from "react";
import "./userstableheader.scss";
import SearchBox from "../SearchBox/SearchBox";

const UsersTableHeader = () => {
  return (
    <div className="main_users_table_header_filter">
      <div className="inner_users_table_header_filter">
        <div className="left_users_filter_header">
          <button className="primary-btn ">
            <label>
              <ion-icon name="add"></ion-icon>
            </label>
            Add New Student
          </button>
        </div>
        <div className="right_users_filter_header">
          <SearchBox />
          <button className="secondary-btn">
            <label>
              <ion-icon name="git-pull-request-outline"></ion-icon>
            </label>
            Filter
          </button>
          <button className="secondary-btn">
            <label>
              <ion-icon name="trash-outline"></ion-icon>
            </label>
            Delete
          </button>
          <button className="secondary-btn">
            <label>
              <ion-icon name="create-outline"></ion-icon>
            </label>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTableHeader;
