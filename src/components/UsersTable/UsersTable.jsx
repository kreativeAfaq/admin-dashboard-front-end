import React from "react";
import "./userstable.scss";
import UserRow from "./UserRow";

const UsersTable = () => {
  return (
    <div className="main_table_user_container">
      <div className="inner_user_table_container">
        {/* TABLE HEADER-------------------------------------------------- */}
        <div className="main_table_headings">
          <div className="table_head_bx">
            <input type="checkbox" />
          </div>
          <div className="table_head_bx">
            <h2>Student Name</h2>
          </div>
          <div className="table_head_bx">
            <h2>ID</h2>
          </div>
          <div className="table_head_bx">
            <h2>Class</h2>
          </div>
          <div className="table_head_bx">
            <h2>Age</h2>
          </div>
          <div className="table_head_bx">
            <h2>Gender</h2>
          </div>
          <div className="table_head_bx">
            <h2>Action</h2>
          </div>
        </div>
        {/* TABLE HEADER-------------------------------------------------- */}

        {/* TABLE BODY CONTAINER -------------------------------------------- */}

        <div className="main_table_body_container">
          {/* USER DETAILS TABLE */}

          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />
          <UserRow />

          {/* USER DETAILS TABLE */}
        </div>

        {/* TABLE BODY CONTAINER -------------------------------------------- */}
      </div>
    </div>
  );
};

export default UsersTable;
