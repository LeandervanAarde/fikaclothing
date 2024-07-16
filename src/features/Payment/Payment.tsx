import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { creditCardContainer } from "./styles";
import CreditCard from "../../components/CreditCard/CreditCard";
import { formatCardNumber } from "../../globals/helpers/helpers";
import { globalColors } from "../../globals/styles/styles";
import {
  IAddress,
  ICardInformation,
} from "../../globals/interfaces/structures";
import { Link } from "react-router-dom";
import { Props } from "./Props";

export default function Payment({ cards, addresses }: Props) {
  const [card, setCard] = useState<ICardInformation>(cards[0]);

  const [address, setAddress] = useState<IAddress>(addresses[0]);
  function handleCardChange(e: SelectChangeEvent) {
    const { name, value } = e.target;
    const selectedCardIndex = e.target.value;
    const card = cards[parseInt(selectedCardIndex)];
    setCard(card);
  }

  function handleAddressChange(e: SelectChangeEvent) {
    const { name, value } = e.target;
    const selectedIndex = e.target.value;
    const address = addresses[parseInt(selectedIndex)];
    setAddress(address);
  }

  return (
    <>
      <Box sx={creditCardContainer}>{card && <CreditCard {...card} />}</Box>

      <FormControl fullWidth>
        <InputLabel>Select correct Card</InputLabel>
        <Select onChange={handleCardChange}>
          <MenuItem value={-1} disabled>
            Select a card
          </MenuItem>
          {cards.map((item, index) => (
            <MenuItem key={index} value={index}>
              {`${item.name} -  ${formatCardNumber(item.cardNumber)}`}
            </MenuItem>
          ))}
          <Link to={"/profile"} style={{ color: globalColors.black }}>
            <MenuItem sx={{ color: globalColors.black }}>Add new card</MenuItem>
          </Link>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          sx={{
            width: "120px",
          }}
          autoFocus
          required
          margin="dense"
          id="CVV"
          name="CVV"
          label="CVV"
          type="number"
          fullWidth
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Select delivery Address</InputLabel>
        <Select onChange={handleAddressChange}>
          <MenuItem value={-1} disabled>
            Select a delivery address
          </MenuItem>
          {addresses.map((item, index) => (
            <MenuItem key={index} value={index}>
              {`${item.number} - ${item.street}`}
            </MenuItem>
          ))}
          <Link to={"/profile"} style={{ color: globalColors.black }}>
            <MenuItem sx={{ color: globalColors.black }}>
              Add new Address
            </MenuItem>
          </Link>
        </Select>
      </FormControl>
    </>
  );
}
