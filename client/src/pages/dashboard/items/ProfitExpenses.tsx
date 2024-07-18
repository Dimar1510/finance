import { useTheme } from "@mui/material";
import { FC, useMemo } from "react";
import {
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetKpisQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";
import { numberToFixed } from "src/utils/number-to-fixed";

const ProfitExpenses = () => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: numberToFixed(revenue - expenses),
        };
      })
    );
  }, [data]);
  return (
    <DashboardItem gridArea={"b"}>
      <ItemHeader
        title="Прибыль и доходы"
        subtitle="слева - прибыль, справа - доходы"
        text="+4%"
      ></ItemHeader>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "12px" }} />
          <YAxis
            yAxisId={"left"}
            tickLine={false}
            style={{ fontSize: "12px" }}
            axisLine={false}
          />
          <YAxis
            yAxisId={"right"}
            orientation="right"
            tickLine={false}
            style={{ fontSize: "12px" }}
            axisLine={false}
          />
          <Tooltip />
          <Legend
            height={20}
            wrapperStyle={{
              margin: "0 0 10px 0",
            }}
          />
          <Line
            yAxisId={"left"}
            type={"monotone"}
            dataKey={"profit"}
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId={"right"}
            type={"monotone"}
            dataKey={"revenue"}
            stroke={palette.tertiary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardItem>
  );
};

export default ProfitExpenses;
