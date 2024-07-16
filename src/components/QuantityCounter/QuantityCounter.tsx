import { Box, Typography, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Props } from "./Props";

export default function QuantityCounter({
  quantity,
  increment,
  decrement,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <Typography variant="body1" sx={{ width: "fit-content" }}>
        {quantity}
      </Typography>
      <Box
        sx={{
          display: "flex",

          alignItems: "center",
          gap: "5px",
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
