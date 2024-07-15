import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { outerContainerStyles, subContainerStyles } from "./styles.mui";
import mainImage from "../../Assets/matthew-hamilton-VGR_-NTYVZE-unsplash.jpg";
import subImageOne from "../../Assets/ronit-singh-Pik6W2QNMCQ-unsplash.jpg";
import subImageTwo from "../../Assets/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg";
import { Height } from "@mui/icons-material";
import ProductPreview from "../../features/ProductPreview/ProductPreview.mui";

interface IShoe {
  name: string;
  price: number;
  discount: boolean;
  discountedPrice: number;
  images: string[];
  colors: string[];
  sizes: number[];
}

type Props = {};
const availableShoes: IShoe = {
  name: "Nike Jordan one",
  price: 2300,
  discount: true,
  discountedPrice: 200,
  images: [mainImage, subImageOne, subImageTwo, subImageOne],
  colors: ["red", "white", "blue", "orange"],
  sizes: [7, 9, 5, 9],
};

export default function Product({}: Props) {
  return (
    <Container maxWidth={false} sx={outerContainerStyles}>
      <Container
        sx={{
          ...subContainerStyles,
          display: "flex",
          flexDirection: "column",
          width: "35%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductPreview />
      </Container>

      <Container sx={{ ...subContainerStyles }}>
        <Typography variant="h3">{availableShoes.name}</Typography>
        <Typography variant="caption">R {availableShoes.price}</Typography>

        <Typography variant="body1">
          R {availableShoes.price - availableShoes.discountedPrice}
        </Typography>

        <Typography variant="h4">What's in stock</Typography>

        <Typography variant="h6">Colors</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          {availableShoes.colors.map((color) => (
            <Box
              sx={{
                width: "30px",
                height: "30px",
                border: "1px solid black",
                justifyContent: "center",
                backgroundColor: color,
                borderRadius: "55px",
                alignItems: "center",
                textAlign: "center",
                padding: "5px",
              }}
            ></Box>
          ))}
        </Box>

        <Typography variant="h6">Sizes</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          {availableShoes.sizes.map((size) => (
            <Box
              sx={{
                width: "30px",
                height: "30px",
                border: "1px solid black",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "5px",
              }}
            >
              <Typography variant="caption" sx={{ height: "auto" }}>
                {size}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
