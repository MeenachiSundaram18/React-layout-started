import {
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import HeaderPane from "./layout/HeaderPane";
import FooterPane from "./layout/FooterPane";
import Sidebar from "./layout/Sidebar";
import ContentPane from "./layout/ContentPane";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./App";

const Home = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <HeaderPane>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
        </Toolbar>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </HeaderPane>
      <Box display="flex" flex="1">
        {/* left sidebar */}
        <Sidebar display="flex" width="20vw">
          sidebar
        </Sidebar>
        <ContentPane>content pane</ContentPane>
        {/* Right sidebar */}
        <Sidebar display="flex" width="20vw">
          sidebar
        </Sidebar>
      </Box>
      <FooterPane textAlign={"center"}>
        <Typography variant="body2" color={theme.palette.text.primary}>
          footer
        </Typography>
      </FooterPane>
    </Box>
  );
};

export default Home;
