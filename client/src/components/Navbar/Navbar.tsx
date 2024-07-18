import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import FlexBetween from "src/components/ui/FlexBetween";
import { AttachMoneyOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("");
  return (
    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      <NavLink
        to={"/"}
        onClick={() => setSelected("dashboard")}
        style={{
          color: "inherit",
          textDecoration: "inherit",
        }}
      >
        <FlexBetween gap={"0.75rem"}>
          <AttachMoneyOutlined sx={{ fontSize: "28px" }} />
          <Typography variant="h4" fontSize={"18px"}>
            Logo
          </Typography>
        </FlexBetween>
      </NavLink>

      <FlexBetween gap={"2rem"}>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <NavLink
            to={"/"}
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to={"/predictions"}
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </NavLink>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
