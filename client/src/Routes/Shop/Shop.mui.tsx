import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/Card/Card.mui";
import CardGrid from "../../components/CardGrid/CardGrid.mui";
import Filter from "../../features/ProductFilter/Filter.mui";
import { globalFonts } from "../../StylesSource/styles";

type Props = {};

export default function ProductsSection({}: Props) {
  const mappedItems: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 34, 3, 2, 34, 45, 3, 4, 5, 6, 7, 7, 6,
  ];
  return (
    <>
      <Container 

          maxWidth={false}
          sx={{
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
      >
        <Typography variant="h4" sx={{fontFamily: globalFonts.body}}> 
          Our Products
        </Typography>
        <Filter/>
      </Container>
      <CardGrid>
        {mappedItems.map((item) => (
          <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
            <ProductCard /> 
          </Grid>
        ))}
      </CardGrid>
    </>
  );
}
