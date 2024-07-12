import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { globalFonts } from "../../StylesSource/styles";
import { CardContainerStyles, CardGridStyles } from "./styles.mui";

type Props = {
  heading?: string;
  children: React.ReactNode;
};

export default function CardGrid({ heading, children }: Props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: { xs: 0, md: 2, lg: 2 },
        ...CardContainerStyles,
      }}
    >
      {heading && (
        <Typography
          variant="h4"
          sx={{ cursor: "none" }}
          fontFamily={globalFonts.body}
        >
          {heading}
        </Typography>
      )}
      <Grid
        container
        spacing={3}
        sx={{
          ...CardGridStyles,
          justifyContent: { xs: "center", sm: "center", lg: "start" },
        }}
      >
        {children}
      </Grid>
    </Container>
  );
}
