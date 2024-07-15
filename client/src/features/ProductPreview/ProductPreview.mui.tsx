import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import mainImage from "../../Assets/matthew-hamilton-VGR_-NTYVZE-unsplash.jpg";
import subImageOne from "../../Assets/ronit-singh-Pik6W2QNMCQ-unsplash.jpg";
import subImageTwo from "../../Assets/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg";
import {
  mainImageContainerStyles,
  mainImageStyles,
  subImageContainerStyles,
  subImageStyles,
} from "./styles.mui";
type Props = {};

const images = [mainImage, subImageOne, subImageTwo, subImageOne];

export default function ProductPreview({}: Props) {
  const [image, setImage] = useState<number>(0);

  return (
    <>
      <Box sx={mainImageContainerStyles}>
        <img src={images[image]} alt="main" style={mainImageStyles} />
      </Box>

      <Container
        sx={{
          ...subImageContainerStyles,
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      >
        {images.map((item, index) => (
          <Box
            key={index}
            sx={{
              ...subImageStyles,
              border: index === image ? "1px solid black" : "none",
              "&:hover": {
                transform: index === image ? "none" : "scale(1.1)",
              },
            }}
            onClick={() => setImage(index)}
          >
            <img src={item} alt="main" style={mainImageStyles} />
          </Box>
        ))}
      </Container>
    </>
  );
}
