import React from "react";
import SmallCard from "./index";
import StockData from "../../stock-data";

export default {
  component: SmallCard,
  title: "Small Card"
};

export const Default = () => <SmallCard StockData={StockData} />;
