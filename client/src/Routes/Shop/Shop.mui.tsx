import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ProductCard from "../../Components/Card/Card.mui";
import { globalFonts } from "../../StylesSource/styles";


type Props = {

};

export default function ProductsSection({ }: Props) {
    const mappedItems: number[] = [1,2,3,4,5,6,7,8,34,3,2,34,45,3,4,5,6,7,7,6]
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: { xs: 0, md: 2, lg: 2 },
        textAlign: "center", 
        width: "100%",
        minWidth: "100%",
        justifyContent: 'center'
      }}
    >
      <Typography variant="h4" fontFamily={globalFonts.body} mb={3}>
        Our Products
      </Typography>
      <Grid container spacing={3} sx={{
        display: 'flex',
        justifyContent: {xs: "center", sm: "center" , lg: "start"},
        alignItems: "start"
      }}>
        {mappedItems.map((item) => (
           <Grid item  xs={11} sm={5} md={4} lg={3} xl={2}>
            <ProductCard /> {/* Assuming item contains necessary props */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
