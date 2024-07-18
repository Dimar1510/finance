import { Box, useMediaQuery, useTheme } from "@mui/material";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { gridLarge, gridSmall } from "./gridTemplate";
import RevenueExpenses from "./items/RevenueExpenses";
import ProfitExpenses from "./items/ProfitExpenses";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import RevenueByMonth from "./items/RevenueByMonth";

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
      <RevenueExpenses />
      <ProfitExpenses />
      <RevenueByMonth />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
