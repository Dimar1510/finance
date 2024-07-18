import React from "react";
import DashboardItem from "src/components/DashboardItem/DashboardItem";

const Row1 = () => {
  return (
    <>
      <DashboardItem gridArea={"a"}></DashboardItem>
      <DashboardItem gridArea={"b"}></DashboardItem>
      <DashboardItem gridArea={"c"}></DashboardItem>
    </>
  );
};

export default Row1;
