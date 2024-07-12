import { Paper, Typography } from "@mui/material";
import React from "react";
import { globalColors } from "../../StylesSource/styles";
import MainNavigation from "../Navigation/Navigation.mui";
import Footer from "../../components/Footer/Footer.mui";
import { Outlet } from "react-router";

export default function Page() {
  return (
    <>
      <Paper
     
        sx={{
          backgroundColor: globalColors.white,
          minHeight: "85vh",
          padding: {sm: 0, m: 0, lg: 0, xl: 0},
           maxWidth:'100%',
        }}
      >
        <MainNavigation />
        <Outlet />
      </Paper>
      <Footer />
    </>
  );
}
