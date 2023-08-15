import React from "react";
import "./widgetcard.scss";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { globalColors } from "../../utils/globalStyles";

const WidgetCard = () => {
  const data = [
    {
      name: "Page A",
      uv: 0,
    },
    {
      name: "Page B",
      uv: 1200,
    },
    {
      name: "Page C",
      uv: 1500,
    },
    {
      name: "Page D",
      uv: 800,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
  ];

  return (
    <div className="main_widegt_card_container">
      <div className="inner_widget_card_container">
        {/* WIDGET BOX */}
        <div className="main_widget_card">
          <div className="inner_widget_card">
            <div className="card_widgets_info">
              <p>TOTAL SCHOOLS</p>
              <h2>25K</h2>
              <div className="chart_widget_card_details">
                <span>+45%</span>
              </div>
            </div>
            <div className="card_widgets_graph">
              <ResponsiveContainer width="100%" height="110%">
                <AreaChart width={200} height={60} data={data}>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke={globalColors.green}
                    fill="#fff"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="main_widget_card">
          <div className="inner_widget_card">
            <div className="card_widgets_info">
              <p>TOTAL COLLEGES</p>
              <h2>95K</h2>
              <div className="chart_widget_card_details">
                <span>+45%</span>
              </div>
            </div>
            <div className="card_widgets_graph">
              <ResponsiveContainer width="100%" height="110%">
                <AreaChart width={200} height={60} data={data}>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke={globalColors.green}
                    fill="#fff"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="main_widget_card">
          <div className="inner_widget_card">
            <div className="card_widgets_info">
              <p>TOTAL UNIVERSITIES</p>
              <h2>250K</h2>
              <div className="chart_widget_card_details">
                <span>+45%</span>
              </div>
            </div>
            <div className="card_widgets_graph">
              <ResponsiveContainer width="100%" height="110%">
                <AreaChart width={200} height={60} data={data}>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke={globalColors.green}
                    fill="#fff"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* WIDGET BOX */}
      </div>
    </div>
  );
};

export default WidgetCard;
