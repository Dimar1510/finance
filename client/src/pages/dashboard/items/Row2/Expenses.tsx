import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
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

const Expenses = () => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  const expenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [data]);

  return (
    <DashboardItem gridArea={"d"}>
      <ItemHeader
        title="Операционные и внереализационные расходы"
        text="+4%"
      ></ItemHeader>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={expenses}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 65,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "12px" }} />
          <YAxis
            yAxisId={"left"}
            orientation="left"
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
          <Line
            yAxisId={"left"}
            type={"monotone"}
            dataKey={"Non Operational Expenses"}
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId={"right"}
            type={"monotone"}
            dataKey={"Operational Expenses"}
            stroke={palette.tertiary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardItem>
  );
};

export default Expenses;
