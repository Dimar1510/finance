import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useGetKpisQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";
import FlexBetween from "src/components/ui/FlexBetween";

const Targets = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const data = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
  ];

  return (
    <DashboardItem gridArea={"e"}>
      <ItemHeader title="Кампании и цели" text="+4%"></ItemHeader>
      <FlexBetween mt={"0.25rem"} gap={"1.5rem"} pr={"1rem"}>
        <PieChart
          width={110}
          height={100}
          margin={{
            top: 0,
            right: -10,
            left: 10,
            bottom: 0,
          }}
        >
          <Pie
            stroke="none"
            data={data}
            innerRadius={25}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>

        <Box ml={"-0.7rem"} flexBasis={"40%"} textAlign={"center"}>
          <Typography variant="h5">Целевые продажи</Typography>
          <Typography m={"0.3rem 0"} variant="h3" color={palette.primary[300]}>
            83
          </Typography>
          <Typography variant="h6">Желаемая цель</Typography>
        </Box>

        <Box flexBasis={"40%"}>
          <Typography variant="h5">Потери выручки</Typography>
          <Typography variant="h6">Потери снизились на 25%</Typography>
          <Typography mt={"0.4rem"} variant="h5">
            Рентабельность
          </Typography>
          <Typography variant="h6">Рентабельность выше на 30%</Typography>
        </Box>
      </FlexBetween>
    </DashboardItem>
  );
};

export default Targets;
