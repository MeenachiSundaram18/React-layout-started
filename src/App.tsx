import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import Home from "./Home";
import { ThemeMode, customTheme } from "./themes";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const storedTheme = localStorage.getItem("themeMode");
  const defaultThemeMode: ThemeMode = "light";

  const getInitialThemeMode = (): ThemeMode => {
    return storedTheme ? (storedTheme as ThemeMode) : defaultThemeMode;
  };

  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode);

  const theme = createTheme(customTheme(themeMode));

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
