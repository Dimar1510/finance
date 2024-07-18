import React from "react";
import { useGetProductsQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";

const Row2 = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <>
      <DashboardItem gridArea={"d"}></DashboardItem>
      <DashboardItem gridArea={"e"}></DashboardItem>
      <DashboardItem gridArea={"f"}></DashboardItem>
    </>
  );
};

export default Row2;
