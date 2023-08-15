import React from "react";

const UserRow = () => {
  return (
    <div className="table_user_details_grid">
      <div className="user_table_details_bx">
        <input type="checkbox" />
      </div>
      <div className="user_table_details_bx">
        <div className="profile_pic_user_table">
          <img src={require("../../media/user.jpeg")} alt="" />
        </div>
        <h2>Afaq haider</h2>
      </div>
      <div className="user_table_details_bx">
        <h2>ID:52385</h2>
      </div>
      <div className="user_table_details_bx">
        <h2>Mathes IV</h2>
      </div>
      <div className="user_table_details_bx">
        <h2>18</h2>
      </div>
      <div className="user_table_details_bx">
        <h2>Male</h2>
      </div>
      <div className="user_table_details_bx">
        <label className="view_more_user_table">View Profile</label>
      </div>
    </div>
  );
};

export default UserRow;
