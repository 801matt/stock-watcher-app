import React from "react";
import LargeCard from "./index";
import StockData from "../../stock-data";


export default {
  component: LargeCard,
  title: "Large Card"
};

export const Default = () => <LargeCard StockData={StockData} />;
