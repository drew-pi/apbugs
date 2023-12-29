import React from "react";
import {RoutingApp} from "./modules/index"

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";


function App() {
  const { theme } = useThemeContext()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutingApp />
    </ThemeProvider>
  );
}

export default App;
