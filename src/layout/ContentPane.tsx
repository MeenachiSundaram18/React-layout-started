import { useTheme } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import React, { ReactNode } from "react";

export interface ContentPaneProps extends BoxProps {
  children: ReactNode;
}

const ContentPane: React.FC<ContentPaneProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: theme.palette.background.paper,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ContentPane;
