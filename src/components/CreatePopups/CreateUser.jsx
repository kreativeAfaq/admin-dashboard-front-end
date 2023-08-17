import React, { useState } from "react";
import "./createpopups.scss";

function CreateUser({ onClosePopup }) {
  const [Image, setImage] = useState();
  const [values, setValues] = useState();

  // Handle Form Values ---------------------------------------------------------------------
  const HandleFormValues = (e, name) => {
    !name
      ? setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      : setValues((prev) => ({ ...prev, [name]: e.value }));
  };

  console.log(values);

  return (
    <div className="mainPopupContainer">
      <div className="innerPopupContainer">
        <div className="popupHeader">
          <h2>Create New User</h2>
          <label onClick={onClosePopup}>
            <ion-icon name="close"></ion-icon>
          </label>
        </div>
        <div className="popupBodyContainer">
          <div className="imageUploader">
            {Image && (
              <div className="displayImg">
                <img src={Image ? URL.createObjectURL(Image) : null} alt="" />
              </div>
            )}
            <div className={Image ? "inputUploader active" : "inputUploader"}>
              <>
                <label htmlFor="Image">
                  <ion-icon name="cloud-upload-outline"></ion-icon>
                  <h2>Upload Image</h2>
                </label>
                <input
                  type="file"
                  id="Image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </>
            </div>
          </div>

          <div className="formDataPopupContainer">
            <div className="inputBx">
              <input
                type="text"
                name="username"
                onChange={HandleFormValues}
                placeholder="Username"
              />
            </div>
            <div className="inputBx">
              <input
                type="text"
                name="email"
                onChange={HandleFormValues}
                placeholder="Email"
              />
            </div>
            <div className="inputBx">
              <input
                type="text"
                name="mobileno"
                onChange={HandleFormValues}
                placeholder="Mobile Number"
              />
            </div>
            <div className="inputBx">
              <input
                type="text"
                name="password"
                onChange={HandleFormValues}
                placeholder="Password"
              />
            </div>

            <div className="inputBx">
              <input
                type="text"
                name="cpassword"
                onChange={HandleFormValues}
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="popupCtaBtns">
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
