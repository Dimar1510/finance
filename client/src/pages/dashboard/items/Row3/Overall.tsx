import { Box, Typography, useTheme } from "@mui/material";
import DashboardItem from "src/components/DashboardItem/DashboardItem";
import ItemHeader from "src/components/ItemHeader/ItemHeader";

const Overall = () => {
  const { palette } = useTheme();
  return (
    <DashboardItem gridArea={"j"}>
      <ItemHeader title="Итого" text="+4%"></ItemHeader>
      <Box
        height={"15px"}
        margin={"1.25rem 1rem 0.4rem 1rem"}
        bgcolor={palette.primary[800]}
        borderRadius={"1rem"}
      >
        <Box
          height={"15px"}
          width={"40%"}
          bgcolor={palette.primary[600]}
          borderRadius={"1rem"}
        ></Box>
      </Box>
      <Typography margin="0 1rem" variant="h6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        possimus magnam, modi aspernatur consectetur neque a, quaerat quod optio
        dicta facilis illo praesentium voluptatem.
      </Typography>
    </DashboardItem>
  );
};

export default Overall;
