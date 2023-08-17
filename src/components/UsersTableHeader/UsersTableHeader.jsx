import React, { useState } from "react";
import "./userstableheader.scss";
import SearchBox from "../SearchBox/SearchBox";
import DeletePopup from "../DeletePopup/DeletePopup";
import CreateUser from "../CreatePopups/CreateUser";
import FilterPopup from "../FilterPopups/FilterPopup";

const UsersTableHeader = () => {
  const [isCreatePopup, setIsCreatePopup] = useState(false);
  const [isDeletePopup, setIsDeletePopup] = useState(false);
  const [isFilterPopup, setIsFilterPopup] = useState(false);

  const toggleDeletePopup = () => {
    setIsDeletePopup(!isDeletePopup);
  };

  const toggleCreatePopup = () => {
    setIsCreatePopup(!isCreatePopup);
  };

  const toggleFilterPopup = () => {
    setIsFilterPopup(!isFilterPopup);
  };

  return (
    <>
      <div className="main_users_table_header_filter">
        <div className="inner_users_table_header_filter">
          <div className="left_users_filter_header">
            <button className="primary-btn " onClick={toggleCreatePopup}>
              <label>
                <ion-icon name="add"></ion-icon>
              </label>
              Add New Student
            </button>
          </div>
          <div className="right_users_filter_header">
            <SearchBox />
            <div className="filter_box_wrapper">
              <button className="secondary-btn" onClick={toggleFilterPopup}>
                <label>
                  <ion-icon name="git-pull-request-outline"></ion-icon>
                </label>
                Filter
              </button>
              {isFilterPopup && (
                <FilterPopup onClosePopup={toggleFilterPopup} />
              )}
            </div>
            <button className="secondary-btn" onClick={toggleDeletePopup}>
              <label>
                <ion-icon name="trash-outline"></ion-icon>
              </label>
              Delete
            </button>
          </div>
        </div>
      </div>
      {isDeletePopup && <DeletePopup onClosePopup={toggleDeletePopup} />}
      {isCreatePopup && <CreateUser onClosePopup={toggleCreatePopup} />}
    </>
  );
};

export default UsersTableHeader;
