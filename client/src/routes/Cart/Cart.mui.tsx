import { globalColors, globalFonts } from "../../StylesSource/styles";
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
  Typography,
} from "@mui/material";
import { addresses, cards } from "./constants";
import { ICartProduct } from "../../interfaces/Structure";

function createData(product: ICartProduct) {
  const { description, quantity, color, size, price, discount } = product;
  return { description, quantity, color, size, price, discount };
}

const rows = [
  createData({
    description: "Classic White Sneakers",
    quantity: "50",
    color: "#FFFFFF", // White
    size: "10",
    price: "R1200.00",
    discount: "R200.00",
  }),
  createData({
    description: "High-top Red Sneakers",
    quantity: "30",
    color: "#FF0000", // Red
    size: "11",
    price: "R1500.00",
    discount: "R250.00",
  }),
  createData({
    description: "Leather Brown Sneakers",
    quantity: "70",
    color: "#8B4513", // Saddle Brown
    size: "9",
    price: "R800.00",
    discount: "R100.00",
  }),
  createData({
    description: "Casual Gray Sneakers",
    quantity: "45",
    color: "#2F4F4F", 
    size: "8",
    price: "R600.00",
    discount: "R50.00",
  }),
  createData({
    description: "Sporty Black Sneakers",
    quantity: "20",
    color: "#000000", // Black
    size: "12",
    price: "R1400.00",
    discount: "R300.00",
  }),
];

export default function Cart() {
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
          width: {xs: '100%', md: "60%"},
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Typography variant="h3" sx={{font: globalFonts.body}}>
          Your cart
        </Typography>
        <TableContainer component={Paper} >
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Quanity</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Size</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Discount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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
                  <TableCell align="right">- {row.discount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
        <Payment cards={cards} addresses={addresses} />
      </Container>
    </Container>
  );
}
