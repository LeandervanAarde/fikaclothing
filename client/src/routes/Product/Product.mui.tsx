import { Box, Container, Typography, Button } from "@mui/material";
import {
  calculateBorder,
  optionStyles,
  outerContainerStyles,
  subContainerStyles,
} from "./styles.mui";
import { useState } from "react";
import { ISelectedValues } from "../../interfaces/Product";
import ProductPreview from "../../features/ProductPreview/ProductPreview.mui";
import { defaultSelectedValues, availableShoes } from "./constants";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector.mui";

export default function Product() {
  const [selectedValues, setSelectedValue] = useState<ISelectedValues>(
    defaultSelectedValues
  );

  const handleSelect = (name: string, value: unknown) => {
    setSelectedValue({ ...selectedValues, [name]: value });
  };

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

      <Container
        sx={{
          ...subContainerStyles,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Container>
          <Typography variant="h3">{availableShoes.name}</Typography>
          {availableShoes.discount ? (
            <>
              <Typography
                variant="caption"
                sx={{ textDecoration: "line-through", color: "red" }}
              >
                R {availableShoes.price}
              </Typography>

              <Typography variant="body1">
                R {availableShoes.price - availableShoes.discountedPrice}
              </Typography>
            </>
          ) : (
            <Typography variant="body1">R {availableShoes.price}</Typography>
          )}
        </Container>

        <Container
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
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
                onClick={() => handleSelect("color", color)}
                sx={{
                  ...optionStyles,
                  borderRadius: "55px",
                  border: calculateBorder(color, selectedValues.color),
                  backgroundColor: color,
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
                onClick={() => handleSelect("size", size)}
                sx={{
                  ...optionStyles,
                  border: calculateBorder(size, selectedValues.size),
                }}
              >
                <Typography variant="caption" sx={{ height: "auto" }}>
                  {size}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="h6">Quantity</Typography>

          <QuantitySelector
            quantity={selectedValues.quantity}
            increment={() => {
              setSelectedValue({
                ...selectedValues,
                quantity: selectedValues.quantity + 1,
              });
            }}
            decrement={() => {
              setSelectedValue({
                ...selectedValues,
                quantity: selectedValues.quantity - 1,
              });
            }}
          />
        </Container>
        <Button
          disabled={selectedValues === defaultSelectedValues}
          variant="contained"
          onClick={() => setSelectedValue(defaultSelectedValues)}
        >
          Add to Cart
        </Button>
      </Container>
    </Container>
  );
}
