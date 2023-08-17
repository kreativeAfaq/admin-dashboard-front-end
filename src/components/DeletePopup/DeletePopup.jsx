import React from "react";
import "./deletepopup.scss";
import DelSvg from "../../media/delete.jpg";

export default function DeletePopup({ onClosePopup }) {
  return (
    <div className="delete_popup_container">
      <div className="inner_delete_popup_container">
        <div className="delete_popup_img">
          <img src={DelSvg} alt="" />
        </div>
        <div className="delete_popup_details">
          <h2>Are you sure you want to Delete ?</h2>
          <p>
            If you click delete you wont get back this. Please check once again.
          </p>
        </div>
        <div className="delete_popup_cta">
          <button className="delete">Delete</button>
          <button onClick={onClosePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
