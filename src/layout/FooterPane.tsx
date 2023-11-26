import React, { ReactNode } from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export interface FooterPaneProps extends BoxProps {
  children: ReactNode;
}

const FooterPane: React.FC<FooterPaneProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      position="static"
      bottom={0}
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderTop: `1px solid black`,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default FooterPane;
