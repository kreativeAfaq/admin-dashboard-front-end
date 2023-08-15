import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import WidgetCard from "../components/WidgetCard/WidgetCard";
import Statics from "../components/Statics/Statics";

const Home = () => {
  return (
    <DashboardLayout>
      <div className="mainContainer">
        <div className="innerContainer">
          <WidgetCard />
          <Statics />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
