import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import headerImage from "../../Assets/header_image.jpeg";
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { globalColors, globalFonts } from "../../StylesSource/styles";
import ProductCard from "../../components/Card/Card.mui";
import { containerStyles, headerImageStyles } from "./styles.mui";
import CardGrid from "../../components/CardGrid/CardGrid.mui";
import Login from "../../features/Login/Login.mui";

type Props = {};

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
            <ProductCard /> {/* Assuming item contains necessary props */}
          </Grid>
        ))}
      </CardGrid>

      <CardGrid heading="Feature Brand">
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
            <ProductCard /> {/* Assuming item contains necessary props */}
          </Grid>
        ))}
      </CardGrid>

      <CardGrid heading="Feature Brand">
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
            <ProductCard /> {/* Assuming item contains necessary props */}
          </Grid>
        ))}
      </CardGrid>
    </>
  );
}
