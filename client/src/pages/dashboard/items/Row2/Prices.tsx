import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { useGetKpisQuery, useGetProductsQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";

const Prices = () => {
  const { data } = useGetProductsQuery();
  const { palette } = useTheme();
  const productExpense = useMemo(() => {
    return (
      data &&
      data.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price,
          expense,
        };
      })
    );
  }, [data]);

  return (
    <DashboardItem gridArea={"f"}>
      <ItemHeader title="Затраты на реализацию" text="+4%"></ItemHeader>
      <ResponsiveContainer width="100%" height={"100%"}>
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -15,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis
            type="number"
            dataKey="price"
            name="price"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            type="number"
            dataKey="expense"
            name="expense"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `$${v}`}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip formatter={(v) => `$${v}`} />
          <Scatter name="A school" data={productExpense} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardItem>
  );
};

export default Prices;
