import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";

const Transactions = () => {
  const { data } = useGetTransactionsQuery();
  const { palette } = useTheme();
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Клиент",
      flex: 0.5,
    },
    {
      field: "amount",
      headerName: "Сумма",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Кол-во",
      flex: 0.5,
      renderCell: (params: GridCellParams) =>
        `${(params.value as string[]).length}`,
    },
  ];
  return (
    <DashboardItem gridArea={"h"}>
      <ItemHeader
        title="Выполненные заказы"
        text={data?.length + " транзакций"}
      ></ItemHeader>

      <Box
        mt={"1rem"}
        p={"0 0.5rem"}
        height={"80%"}
        sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-withBorderColor": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={data || []}
          columns={transactionColumns}
          //   processRowUpdate={(updatedRow, originalRow) =>
          //     console.log(updatedRow)
          //   }
          //   onProcessRowUpdateError={() => console.log("er")}
        />
      </Box>
    </DashboardItem>
  );
};

export default Transactions;
