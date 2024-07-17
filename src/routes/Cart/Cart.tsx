import { globalColors, globalFonts } from "../../globals/styles/styles";
import Payment from "../../features/Payment/Payment";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Addresses, Cards, DeliveryTypes, MockData } from "./constants";
import { ICartTotals } from "../../globals/interfaces/structures";

const defaultTotals: ICartTotals = {
  Price: 0.0,
  VAT: 0.15,
  Delivery: 0.0,
  Discount: 0.0,
  Total: 0.0,
};

export default function Cart() {
  const [deliveryOption, setDeliveryOption] = useState<number | null>(null);
  const [cartTotals, setCartTotals] = useState<ICartTotals>(defaultTotals);

  function calculateCart() {
    let newPrice = 0;
    let newDiscount = 0;

    MockData.forEach((item) => {
      newPrice += item.price * item.quantity;
      newDiscount += item.price * item.discount * item.quantity;
    });

    let newDelivery =
      deliveryOption !== null ? DeliveryTypes[deliveryOption].priceIncrease : 0;
    let newTotal = (newPrice + 0.15 + newDelivery - newDiscount).toFixed(2);
    setCartTotals((prevTotals: ICartTotals) => ({
      ...prevTotals,
      Price: newPrice,
      Delivery: newDelivery,
      Discount: newDiscount,
      Total: parseFloat(newTotal),
    }));
  }

  useEffect(() => {
    calculateCart();
  }, [deliveryOption, MockData]);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "70vh",
        p: 2
    
      }}
    >
      <Container
        sx={{
          width: { xs: "100%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: '78vh',
          overflow: "scroll",
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: globalFonts.body }}>
          Your cart
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Quanity</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Size</TableCell>
                <TableCell align="right">Price per unit</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Discount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {MockData.map((row) => (
                <TableRow
                  key={row.color}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.color}</TableCell>
                  <TableCell align="right">{row.size}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    {row.price * row.quantity}
                  </TableCell>
                  <TableCell align="right">
                    - {row.price * row.discount * row.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{display: 'flex',justifyContent: 'space-between', width: '100%'}}>
            {Object.entries(cartTotals).map(([key, value]) => {
              if (key === "VAT") {
                return (
                  <Typography key={key}>
                    <b> {key} </b> : 15%
                  </Typography>
                );
              }
              return (
                <Typography key={key}>
                  <b> {key} </b>: R {value}
                </Typography>
              );
            })}
          </Box>
        </Container>

        <Button
          sx={{ width: { xs: "100%", md: "auto" }, height: "40px" }}
          variant="contained"
        >
          Save Cart
        </Button>
      </Container>

      <Container
        sx={{
          width: { sm: "100%", lg: "40%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: { sm: 0, md: 0, lg: "20px", xl: 0 },
        }}
      >
        <Payment cards={Cards} addresses={Addresses} />

        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            padding: 0,
          }}
        >
          {DeliveryTypes.map((item, index) => (
            <Box
              onClick={() => setDeliveryOption(index)}
              sx={{
                width: "50%",
                backgroundColor: globalColors.white,
                padding: 1,
                border: deliveryOption === index ? "2px solid black" : "none",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <item.icon />
                <Typography>{item.type}</Typography>
              </Box>
              <Typography>{item.description}</Typography>
              <Typography sx={{ textAlign: "end" }}>
                {item.deliveryDate}
              </Typography>
            </Box>
          ))}
        </Container>

        <Container
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            sx={{ width: { xs: "100%", md: "auto" } }}
            variant="contained"
            disabled={deliveryOption === null}
          >
            Place Order
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
