import React from "react";
import "./dropdowncards.scss";

const DropDownCards = () => {
  return (
    <div className="main_drop_down_cards">
      <div className="inner_drop_down_cards_header">
        <h2>Managment Details</h2>
      </div>

      <div className="main_drop_down_body">
        <div className="inner_drop_down_body">
          <div className="drop_down_details_bx">
            <p>Location</p>
            <h2>State, District, Mandal</h2>
          </div>
          <div className="drop_down_details_bx">
            <p>Students</p>
            <h2>300k</h2>
          </div>
          <div className="drop_down_details_bx">
            <p>Teachers</p>
            <h2>1K</h2>
          </div>
          <div className="drop_down_details_bx">
            <p>Classes</p>
            <h2>Upto 10th Class</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownCards;
