import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

export default function QuantitySelector({
  quantity,
  increment,
  decrement,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: '5px'
      }}
    >
      <Typography variant="body1" sx={{ width: "fit-content" }}>
        {quantity}
      </Typography>
      <Box
            sx={{
              display: "flex",
              
              alignItems: "center",
              gap: '5px'
            }}
      >
        <IconButton onClick={decrement}>
          <Remove />
        </IconButton>
        <IconButton onClick={increment}>
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
}
