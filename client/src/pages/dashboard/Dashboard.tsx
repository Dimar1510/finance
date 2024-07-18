import { Box, useMediaQuery, useTheme } from "@mui/material";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { gridLarge, gridSmall } from "./gridTemplate";
import RevenueExpenses from "./items/Row1/RevenueExpenses";
import ProfitExpenses from "./items/Row1/ProfitExpenses";
import RevenueByMonth from "./items/Row1/RevenueByMonth";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import Expenses from "./items/Row2/Expenses";
import Targets from "./items/Row2/Targets";

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
      <DashboardItem gridArea={"f"}></DashboardItem>
      {/* Row 3 */}
      <Row3 />
    </Box>
  );
};

export default Dashboard;
