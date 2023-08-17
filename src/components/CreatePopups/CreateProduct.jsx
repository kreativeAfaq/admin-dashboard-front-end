import React, { useState } from "react";
import "./createpopups.scss";
import Select from "react-select";
import {
  mandalData,
  options_styles,
  statesData,
  villageData,
} from "../../utils/globalOptions";

function CreateProduct({ onClosePopup }) {
  const [values, setValues] = useState();
  const [Image, setImage] = useState();

  // Handle Form Values ---------------------------------------------------------------------

  const HandleFormValues = (e, name) => {
    !name
      ? setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      : setValues((prev) => ({ ...prev, [name]: e.value }));
  };

  return (
    <div className="mainPopupContainer">
      <div className="innerPopupContainer">
        <div className="popupHeader">
          <h2>Create New Product</h2>
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
                placeholder="School Name"
                name="title"
                onChange={HandleFormValues}
              />
            </div>
            <div className="inputBx">
              <Select
                placeholder="State"
                styles={options_styles}
                options={statesData}
                name="state"
                onChange={(e) => HandleFormValues(e, "state")}
              />
            </div>
            <div className="inputBx">
              <Select
                placeholder="District"
                styles={options_styles}
                name="district"
                onChange={(e) => HandleFormValues(e, "district")}
                isDisabled={!values?.state}
                options={statesData
                  ?.filter((item) => item?.value === values?.state)[0]
                  ?.districts.map((item) => {
                    return { label: item, value: item?.toLowerCase() };
                  })}
              />
            </div>
            <div className="inputBx">
              <Select
                placeholder="Mandal"
                styles={options_styles}
                name="mandal"
                onChange={(e) => HandleFormValues(e, "mandal")}
                options={mandalData}
              />
            </div>
            <div className="inputBx">
              <Select
                placeholder="Village"
                styles={options_styles}
                name="village"
                onChange={(e) => HandleFormValues(e, "village")}
                options={villageData}
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

export default CreateProduct;
