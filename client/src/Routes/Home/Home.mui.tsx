import React from "react";
import { Container, Box, Typography } from "@mui/material";
import headerImage from "../../Assets/header_image.jpeg";
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { globalColors, globalFonts } from "../../StylesSource/styles";
import ProductCard from "../../Components/Card/Card.mui";

type Props = {};

const headerImageStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  padding: "0",
  objectFit: "cover",
  objectPosition: "0 -30vh",
  position: "relative", // Ensure the container is relative for absolute positioning inside it
};

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

export default function Home({}: Props) {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          height: "60vh",
          padding: { xs: 0, md: 0, lg: 0 },
          position: "relative",
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

      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: 0, md: 2, lg: 2 },
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h4" fontFamily={globalFonts.body}>
          Featured Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: 0, md: 2, lg: 2 },
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h4" fontFamily={globalFonts.body}>
        FeaturedBrandOne
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: 0, md: 2, lg: 2 },
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h4" fontFamily={globalFonts.body}>
          FeaturedBrandOne
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Container>
    </>
  );
}
