import { Box, useMediaQuery } from "@mui/material";
import { gridLarge, gridSmall } from "./gridTemplate";
import RevenueExpenses from "./items/Row1/RevenueExpenses";
import ProfitExpenses from "./items/Row1/ProfitExpenses";
import RevenueByMonth from "./items/Row1/RevenueByMonth";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import Expenses from "./items/Row2/Expenses";
import Targets from "./items/Row2/Targets";
import Prices from "./items/Row2/Prices";
import Products from "./items/Row3/Products";
import Transactions from "./items/Row3/Transactions";
import ExpensesByCategory from "./items/Row3/ExpensesByCategory";
import Overall from "./items/Row3/Overall";
import {
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "src/app/services/api";

const Dashboard = () => {
  const { data: products } = useGetProductsQuery();
  const { data: transactions } = useGetTransactionsQuery();

  if (products) console.log("products:", products);

  const sum = products?.reduce((acc, obj) => {
    return acc + obj.expense;
  }, 0);

  if (sum) console.log(sum);
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isLargeScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridLarge,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridSmall,
            }
      }
    >
      {/* <RevenueExpenses />
      <ProfitExpenses />
      <RevenueByMonth />

      <Expenses />
      <Targets />
      <Prices />

      <Products />
      <Transactions />
      <ExpensesByCategory />
      <Overall /> */}

      <Products />
    </Box>
  );
};

export default Dashboard;
