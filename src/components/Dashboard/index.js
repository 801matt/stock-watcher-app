import React from "react";
import SmallCard from "../SmallCard";
import LargeCard from "../LargeCard";
import { Tablet } from "../../sizing";
import styled from "styled-components";

const InternalUseDashboard = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  .dashboard__large-card {
    display: none;
  }
  @media (min-width: ${Tablet}) {
    .dashboard__small-card {
      display: none;
    }
    .dashboard__large-card {
      display: block;
    }
  }
`;

// GET WINDOW WIDTH

const Dashboard = ({ StockData }) => {
  return (
    <InternalUseDashboard>
      <div className="dashboard__small-card">
        <SmallCard StockData={StockData} />
      </div>
      <div className="dashboard__large-card">
        <LargeCard StockData={StockData} />
      </div>
    </InternalUseDashboard>
  );
};

export default Dashboard;
