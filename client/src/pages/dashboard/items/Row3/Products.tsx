import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetProductsQuery } from "src/app/services/api";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";

const Products = () => {
  const { data } = useGetProductsQuery();
  const { palette } = useTheme();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Расходы",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
      editable: true,
    },
    {
      field: "price",
      headerName: "Стоимость",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  return (
    <DashboardItem gridArea={"g"}>
      <ItemHeader
        title="Список товаров"
        text={data?.length + " products"}
      ></ItemHeader>

      <Box
        mt={"0.5rem"}
        p={"0 0.5rem"}
        height={"75%"}
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
          columns={productColumns}
          //   processRowUpdate={(updatedRow, originalRow) =>
          //     console.log(updatedRow)
          //   }
          //   onProcessRowUpdateError={() => console.log("er")}
        />
      </Box>
    </DashboardItem>
  );
};

export default Products;
