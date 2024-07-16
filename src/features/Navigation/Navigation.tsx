import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { globalColors, globalFonts } from "../../globals/styles/styles";
import { ReactComponent as StoreLogo } from "../../assets/Logo.svg";

import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { ISettings } from "./interfaces";
import { subRoutes } from "../../routes/Router/router";

const settings: ISettings[] = [
  {
    name: "Cart",
    route: "/cart",
  },
  {
    name: "Account",
    route: "/profile",
  },
  {
    name: "Logout",
    route: "/",
  },
];

function Navigation() {
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
            <Link to={"/"}>
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
            </Link>
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
                {subRoutes[0].children.map((page) => {
                  if (page.shouldShow) {
                    return (
                      <Link
                        key={page.path}
                        style={{ color: globalColors.black }}
                        to={page.path}
                      >
                        <MenuItem>{page.name}</MenuItem>
                      </Link>
                    );
                  }
                  return null;
                })}
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
              {subRoutes[0].children.map((page) => {
                if (page.shouldShow) {
                  return (
                    <Link style={{ color: globalColors.white }} to={page.path}>
                      <Button
                        key={page.name}
                        // onClick={handleNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  );
                } else {
                  return;
                }
              })}
            </Box>

            <Box sx={{ flexGrow: 0, gap: 2 }}>
              <Login />
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
                  <MenuItem key={setting.name} onClick={handleUserMenu}>
                    <Link
                      style={{ color: globalColors.black }}
                      to={setting.route}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </Link>
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
export default Navigation;
