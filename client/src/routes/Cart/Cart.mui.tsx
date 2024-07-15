import { Box, Container } from "@mui/material";
import React from "react";
import CreditCard from "../../components/CreditCard/CreditCard.mui";

type Props = {};

export default function Cart({}: Props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "70vh",
        padding: { sm: 0, md: 0, lg: 0, xl: 0 },
      }}
    >
      <Container
        sx={{
          backgroundColor: "red",
          width: "60%",
        }}
      ></Container>

      <Container
        sx={{
          width: {sm: '100%', lg: "40%"},
          padding: { sm: 0, md: 0, lg: 0, xl: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "210px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CreditCard />
        </Box>
      </Container>
    </Container>
  );
}
