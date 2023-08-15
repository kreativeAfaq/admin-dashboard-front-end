import React from "react";
import "./searchbox.scss";

const SearchBox = () => {
  return (
    <div className="searchBx">
      <label>
        <ion-icon name="search-outline"></ion-icon>
      </label>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBox;
