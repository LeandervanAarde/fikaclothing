import { Paper } from "@mui/material";
import React from "react";
import { globalColors } from "../../globals/styles/styles";
// import MainNavigation from "../Navigation/Navigation.mui";
// import Footer from "../../components/Footer/Footer.mui";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export default function Page() {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: globalColors.white,
          minHeight: "85vh",
          padding: { sm: 0, md: 0, lg: 0, xl: 0 },
        }}
      >
        <Navigation/>
        <Outlet />
      </Paper>
      <Footer/>
    </>
  );
}
