import { FC, ReactNode } from "react";
import FlexBetween from "../ui/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
  text: string;
  subtitle?: string;
  icon?: ReactNode;
}

const ItemHeader: FC<Props> = ({ icon, title, subtitle, text }) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin={"1.5rem 1rem 0 1rem"}>
      <FlexBetween>
        {icon}
        <Box width={"100%"}>
          <Typography variant="h4" mb={"-0.1rem"}>
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography
        variant="h5"
        fontWeight={"700"}
        color={palette.secondary[500]}
      >
        {text}
      </Typography>
    </FlexBetween>
  );
};

export default ItemHeader;
