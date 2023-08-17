import React, { useState } from "react";

const FilterBox = ({ title, data = [] }) => {
  const [isActive, setIsActive] = useState();

  const ToggleActiveTabs = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? "filter_drop_down active" : "filter_drop_down"}>
      <div className="filter_drop_down_head" onClick={ToggleActiveTabs}>
        <h2>{title}</h2>
        <label>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </label>
      </div>
      <div className="filter_drop_down_body">
        <div className="filter_drop_down_inner_body">
          {data?.map((item) => {
            return (
              <div className="filter_item_bx" key={item?.value}>
                <input type="checkbox" id={`filterInput${item?.value}`} />
                <label htmlFor={`filterInput${item?.value}`}>
                  {item?.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
