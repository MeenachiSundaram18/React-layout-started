import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import "./base.scss";
import { ThemeOptions } from "@mui/material";

export type ThemeMode = "light" | "dark";

export const customTheme = (mode: ThemeMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme),
  },
});
