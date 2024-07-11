import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { globalColors, globalFonts } from "../../StylesSource/styles";
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { subRoutes } from "../../Routes/router/router";
import { Link } from "react-router-dom";

const pages = ["Home", "Store"];
const settings = ["Cart", "Account", "Logout"];

function MainNavigation() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(anchorElNav == null ? event.currentTarget : null);
  };
  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(anchorElUser == null ? event.currentTarget : null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: globalColors.black,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              width={75}
              height={75}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              alignContent={"center"}
            >
              <StoreLogo />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: globalFonts.heading,
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: globalColors.red,
                textDecoration: "none",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {subRoutes[0].children.map((page) => (
                  <MenuItem key={page.path} onClick={handleNavMenu}>
                    <Link style={{color: globalColors.black}} to={page.path}>{page.name}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
              width={40}
              height={40}
              alignContent={"center"}
            >
              <StoreLogo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {subRoutes[0].children.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link style={{color: globalColors.white}} to={page.path}>{page.name}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 , gap: 2}}>
              <Button variant="contained" sx={{mr: 2, backgroundColor: globalColors.red,}}>
                Log in
              </Button>

              <Tooltip title="Open settings">
                <IconButton onClick={handleUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default MainNavigation;
