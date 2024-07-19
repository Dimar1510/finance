import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useGetKpisQuery } from "src/app/services/api";
import { GetKpisResponse } from "src/app/types";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";
import FlexBetween from "src/components/ui/FlexBetween";

const ExpensesByCategory = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: kpisData } = useGetKpisQuery();
  console.log(kpisData);
  const chartData = useMemo(() => {
    if (kpisData) {
      const totalExpenses = kpisData[0].totalExpenses;
      return Object.entries(kpisData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpisData]);

  return (
    <DashboardItem gridArea={"i"}>
      <ItemHeader title="Расходы по категориям" text="+4%"></ItemHeader>
      <FlexBetween
        mt={"0.5rem"}
        gap={"0.5rem"}
        p={"0 1rem"}
        textAlign={"center"}
      >
        {chartData?.map((data, i) => (
          <Box key={data[0].name}>
            <PieChart width={110} height={70}>
              <Pie
                stroke="none"
                data={data}
                innerRadius={18}
                outerRadius={35}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Typography variant="h5">{data[0].name}</Typography>
          </Box>
        ))}
      </FlexBetween>
    </DashboardItem>
  );
};

export default ExpensesByCategory;
