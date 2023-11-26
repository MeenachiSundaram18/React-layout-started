import React, { ReactNode } from "react";
import { AppBar, AppBarProps, Toolbar, useTheme } from "@mui/material";

export interface HeaderPaneProps extends AppBarProps {
  children: ReactNode;
}

const HeaderPane: React.FC<HeaderPaneProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderBottom: `1px solid grey`,
      }}
      {...rest}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default HeaderPane;
