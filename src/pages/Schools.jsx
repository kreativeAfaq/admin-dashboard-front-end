import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import UsersTableHeader from "../components/UsersTableHeader/UsersTableHeader";
import ProductCard from "../components/ProductCards/ProductCard";

const Schools = () => {
  return (
    <DashboardLayout>
      <div className="mainContainer">
        <div className="innerContainer">
          <UsersTableHeader />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridGap: "20px",
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schools;
