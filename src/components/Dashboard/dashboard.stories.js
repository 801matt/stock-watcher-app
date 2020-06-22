import React from "react";
import Dashboard from "./index";
import StockData from "../../stock-data";

export default {
  component: Dashboard,
  title: "Dashboard"
};

export const Default = () => <Dashboard StockData={StockData}  />;
