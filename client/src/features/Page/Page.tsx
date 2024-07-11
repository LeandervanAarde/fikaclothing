import { Paper, Typography } from "@mui/material";
import React from "react";
import { globalColors } from "../../StylesSource/styles";
import MainNavigation from "../Navigation/Navigation.mui";
import Footer from "../../Components/Footer/Footer.mui";
import { Outlet } from "react-router";

export default function Page() {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: globalColors.white,
          minHeight: "85vh",
          padding: 0,
        }}
      >
        <MainNavigation />
        <Outlet />
      </Paper>
      <Footer />
    </>
  );
}
