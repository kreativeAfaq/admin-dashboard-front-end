import React, { useState } from "react";
import "../Styles/viewmanagment.scss";
import DashboardLayout from "../Layout/DashboardLayout";
import DropDownCards from "../components/DropDownCards/DropDownCards";
import UsersTable from "../components/UsersTable/UsersTable";
import CreateUser from "../components/CreatePopups/CreateUser";

const ViewManagment = () => {
  const [isCreatePopup, setIsCreatePopup] = useState(false);

  const toggleCreatePopup = () => {
    setIsCreatePopup(!isCreatePopup);
  };

  return (
    <DashboardLayout>
      <div className="mainContainer">
        <div className="innerContainer">
          {/* -------------------------- View Managment Details -------------------------- */}

          <div className="main_view_product_details_container">
            <div className="inner_view_product_details_container">
              <div className="product_basic_info_container">
                <div className="product_info_box_details">
                  <div className="product_view_image_bx">
                    <img src={require("../media/school-img.jpg")} alt="" />
                  </div>
                  <div className="product_info_text_details">
                    <h2>The Asian School, Dehradun</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe voluptatem quidem, porro iste, tempora inventore
                      minima rem commodi iusto facere placeat itaque alias
                      suscipit! Eius atque nulla ducimus dolore eos. Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Saepe
                      voluptatem quidem, porro iste, tempora inventore minima
                      rem commodi iusto facere placeat itaque alias suscipit!
                      Eius atque nulla ducimus dolore eos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product_details_info_container">
                <div className="inner_product_details_info_container">
                  <button className="secondary-btn" onClick={toggleCreatePopup}>
                    <label>
                      <ion-icon name="create-outline"></ion-icon>
                    </label>
                    Create Admin
                  </button>

                  <DropDownCards />
                </div>
              </div>
            </div>

            <div className="view_product_tables_members_card">
              <div className="header_view_product_tables_members_card">
                <label className="active">Students</label>
                <label>Teachers</label>
                <label>Other Staff</label>
              </div>

              <div className="inner_product_main_table_data">
                <UsersTable />
              </div>
            </div>
          </div>
          {isCreatePopup && <CreateUser onClosePopup={toggleCreatePopup} />}
          {/* -------------------------- View Managment Details -------------------------- */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewManagment;
