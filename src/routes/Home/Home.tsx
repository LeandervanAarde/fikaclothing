import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import headerImage from "../../assets/header_image.jpeg";
import { ReactComponent as StoreLogo } from "../../assets/Logo.svg";
import { globalColors, globalFonts } from "../../globals/styles/styles";
import ProductCard from "../../components/Card/Card";
import { containerStyles, headerImageStyles } from "./styles";
import CardGrid from "../../components/Grid/Grid";
import Login from "../../features/Login/Login";

const logoContainerStyles: React.CSSProperties = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  right: "0",
  top: "2%",
  transform: "translate(-10%, -1%)",
  zIndex: "1",
};
export default function Home() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          padding: { xs: 0, md: 0, lg: 0 },
          ...containerStyles,
        }}
      >
        <Box
          sx={{
            ...logoContainerStyles,
          }}
        >
          <StoreLogo width={75} height={75} />
          <Typography
            variant="body1"
            sx={{ fontFamily: globalFonts.body, color: globalColors.black }}
          >
            Where Sneakers come alive
          </Typography>
        </Box>
        <img
          src={headerImage}
          alt="Nike Air Jordan"
          style={headerImageStyles}
        />
      </Container>

      <CardGrid heading="Feature Brand">
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
            <ProductCard /> 
          </Grid>
        ))}
      </CardGrid>

      <CardGrid heading="Feature Brand">
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
            <ProductCard />
          </Grid>
        ))}
      </CardGrid>

      <CardGrid heading="Feature Brand">
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
            <ProductCard /> 
          </Grid>
        ))}
      </CardGrid>
    </>
  );
}
