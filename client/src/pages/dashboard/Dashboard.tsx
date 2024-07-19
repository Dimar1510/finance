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

const Dashboard = () => {
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
      {/* Row 1 */}
      <RevenueExpenses />
      <ProfitExpenses />
      <RevenueByMonth />

      {/* Row 2 */}
      <Expenses />
      <Targets />
      <Prices />

      {/* Row 3 */}
      <Products />
      <Transactions />
      <ExpensesByCategory />
      <DashboardItem gridArea={"j"}></DashboardItem>
    </Box>
  );
};

export default Dashboard;
