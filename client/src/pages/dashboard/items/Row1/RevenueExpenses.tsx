import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetKpisQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";

const RevenueExpenses = () => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          expenses,
        };
      })
    );
  }, [data]);

  return (
    <DashboardItem gridArea={"a"}>
      <ItemHeader
        title="Доходы и расходы"
        subtitle="верхний график - доходы, нижний график - расходы"
        text="+4%"
      ></ItemHeader>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: 0,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset={"5%"}
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop
                offset={"95%"}
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset={"5%"}
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop
                offset={"95%"}
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "12px" }} />
          <YAxis
            tickLine={false}
            style={{ fontSize: "12px" }}
            axisLine={{ strokeWidth: "0" }}
            domain={[10000, 25000]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorExpenses)"
            dot={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardItem>
  );
};

export default RevenueExpenses;
