import React from "react";
import "./usercard.scss";

const UserCard = () => {
  return (
    <div className="main_user_card">
      <div className="inner_user_card">
        <div className="user_card_details">
          <div className="user_card_image">
            <img src={require("../../media/user.jpeg")} alt="" />
          </div>
          <div className="user_card_info">
            <h2>John Doe</h2>
            <p>Maths Teacher</p>
          </div>
        </div>
        <div className="card_user_call_to_actions">
          <button>
            <label>
              <ion-icon name="trash-outline"></ion-icon>
            </label>
            Delete
          </button>
          <button>
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

export default UserCard;
