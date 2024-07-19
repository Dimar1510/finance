import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  // temp workaround until Recharts is fixed
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width={"100%"} height={"100%"} padding={"1rem 2rem 4rem 2rem"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<div>Predictions</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
