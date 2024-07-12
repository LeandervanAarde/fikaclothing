import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/Card/Card.mui";
import CardGrid from "../../components/CardGrid/CardGrid.mui";


type Props = {

};

export default function ProductsSection({ }: Props) {
    const mappedItems: number[] = [1,2,3,4,5,6,7,8,34,3,2,34,45,3,4,5,6,7,7,6]
  return (
    <CardGrid heading="Feature Brand">
    {mappedItems.map((item) => (
      <Grid item xs={11} sm={5} md={4} lg={2.4} xl={2.4}>
        <ProductCard /> {/* Assuming item contains necessary props */}
      </Grid>
    ))}
  </CardGrid>
  );
}
