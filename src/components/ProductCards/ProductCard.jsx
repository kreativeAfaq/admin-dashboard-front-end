import React from "react";
import "./productcards.scss";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="mainproductCard">
      <Link to="/view/managment/1">
        <div className="productCardImageBx">
          <img src={require("../../media/user.jpeg")} alt="" />
        </div>
      </Link>
      <div className="innerproductCardDetails">
        <div className="productCardInfo">
          <h2>Title</h2>

          <div className="cardinfoBx">
            <label>
              <ion-icon name="location-outline"></ion-icon> Location
            </label>
            <h4>Locations</h4>
          </div>
          <div className="cardinfoBx">
            <label>
              <ion-icon name="analytics-outline"></ion-icon> Upto
            </label>
            <h4>1-10th Class</h4>
          </div>
          <div className="cardinfoBx">
            <label>
              <ion-icon name="person-outline"></ion-icon> Teachers
            </label>
            <h4>10</h4>
          </div>
          <div className="cardinfoBx">
            <label>
              <ion-icon name="people-outline"></ion-icon> Students
            </label>
            <h4>300</h4>
          </div>
          <div className="cardinfoBx">
            <label>
              <ion-icon name="person-circle-outline"></ion-icon> Adopted By
            </label>
            <h4>Conflatech Solutions</h4>
          </div>
        </div>
        <div className="cardproductBtns">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
