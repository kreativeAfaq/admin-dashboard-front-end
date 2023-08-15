import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./statics.scss";
import { globalColors } from "../../utils/globalStyles";

const Statics = () => {
  const data = [
    {
      name: "Jan",
      uv: 1000,
    },
    {
      name: "Feb",
      uv: 2000,
    },
    {
      name: "March",
      uv: 5000,
    },
    {
      name: "April",
      uv: 2780,
    },
    {
      name: "May",
      uv: 8890,
    },
    {
      name: "June",
      uv: 1890,
    },
  ];

  return (
    <div className="main_statics_container">
      <div className="inner_statics_container">
        <div className="statics_header">
          <div className="header_heading_statics">
            <h2>Statistics</h2>
            <p>Total Users joined with us this year</p>
          </div>

          <div className="statics_filters">
            <label>Weeks</label>
            <label className="active">Months</label>
            <label>Years</label>
          </div>
        </div>

        <div className="statics_graph_container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={globalColors.mediumGray}
              />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statics;
