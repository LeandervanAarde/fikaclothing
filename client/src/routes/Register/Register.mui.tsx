import {
  Container,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  FormControl,
  TextField,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import {
  outerContainerStyles,
  subContainerStyles,
  formControlStyles,
} from "./styles.mui";
import { globalColors } from "../../StylesSource/styles";

type Props = {};

export default function Register({}: Props) {
  return (
    <Container maxWidth={false} sx={outerContainerStyles}>
      <Container sx={subContainerStyles}>
        <Typography variant="h4">Personal Details</Typography>
        <FormControl sx={formControlStyles}>
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstNames"
            name="firstNames"
            label="First Names"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="lastName"
            name="lastName"
            label="Last name"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="cell"
            name="cell"
            label="Cellphone number"
            type="tel"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="confirm"
            name="confirm"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </FormControl>
      </Container>

      <Container sx={subContainerStyles}>
        <Typography variant="h4">Shipping Details</Typography>

        <FormControl sx={formControlStyles}>
          <TextField
            autoFocus
            required
            margin="dense"
            id="street"
            name="street"
            label="Street Address"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="unit"
            name="unit"
            label="Unit / Floor"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="postal"
            name="postal"
            label="Postal code"
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="province"
            name="province"
            label="Province"
            type="text"
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <Box>
          <Button
            variant="contained"
            sx={{ mr: 2, backgroundColor: globalColors.red }}
          >
            Register
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
