import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      Text
    </ThemeProvider>
  );
};

export default App;
