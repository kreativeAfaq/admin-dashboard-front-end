import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import UsersTable from "../components/UsersTable/UsersTable";
import UsersTableHeader from "../components/UsersTableHeader/UsersTableHeader";

const Students = () => {
  return (
    <DashboardLayout>
      <div className="mainContainer">
        <div className="innerContainer">
          <UsersTableHeader />
          <UsersTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Students;
