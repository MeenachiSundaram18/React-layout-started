import React, { ReactNode } from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export interface SidebarProps extends BoxProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Sidebar;
