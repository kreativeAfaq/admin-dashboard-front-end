import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import UsersTableHeader from "../components/UsersTableHeader/UsersTableHeader";
import ProductCard from "../components/ProductCards/ProductCard";
import { useLocation } from "react-router-dom";
import { managmentLabelData } from "../utils/routes";

const Managment = () => {
  const location = useLocation();
  const managmentData = managmentLabelData.find(
    (item) => item.id === location.pathname.split("/").pop()
  );

  return (
    <DashboardLayout>
      <div className="mainContainer">
        <div className="innerContainer">
          <UsersTableHeader
            buttonTitle={managmentData?.singular}
            managmentData={managmentData}
          />

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

export default Managment;
