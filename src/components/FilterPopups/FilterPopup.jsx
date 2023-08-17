import React from "react";
import "./filterpopup.scss";
import FilterBox from "./FilterBox";
import { mandalData, statesData } from "../../utils/globalOptions";

const FilterPopup = ({ onClosePopup }) => {
  return (
    <div className="main_filter_popup_container">
      <div className="inner_filter_popup_container">
        <div className="filter_popup_header">
          <h2>Filters</h2>
          <label onClick={onClosePopup}>
            <ion-icon name="close"></ion-icon>
          </label>
        </div>

        <div className="inner_filter_body_container">
          <FilterBox title="State" data={statesData} />
          <FilterBox title="Mandal" data={mandalData} />
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
