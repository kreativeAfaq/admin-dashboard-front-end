import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import UsersTableHeader from "../components/UsersTableHeader/UsersTableHeader";
import UserCard from "../components/UserCard/UserCard";

const Teachers = () => {
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
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Teachers;
