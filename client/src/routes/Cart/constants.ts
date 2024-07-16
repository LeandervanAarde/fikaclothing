import { ICardInformation } from "../../interfaces/Payment";
import { IAddress } from "../../interfaces/Structure";

export const cards: ICardInformation[] = [
    {
      name: "LE van Aarde",
      cardNumber: "1234 5678 9000 1234",
      expiryDate: "12/24",
    },
    {
      name: "John Doe",
      cardNumber: "4321 8765 0009 4321",
      expiryDate: "11/25",
    },
    {
      name: "Jane Smith",
      cardNumber: "5678 1234 8765 6789",
      expiryDate: "10/23",
    },
    {
      name: "Emily Johnson",
      cardNumber: "9876 5432 1234 9876",
      expiryDate: "09/26",
    },
  ];
  
  export const addresses: IAddress[] = [
    {
      number: "123",
      street: "Main Street",
      unit: "Apt 1",
      province: "Ontario",
      postalCode: "A1B 2C3",
    },
    {
      number: "456",
      street: "Maple Avenue",
      unit: "Suite 200",
      province: "Quebec",
      postalCode: "D4E 5F6",
    },
    {
      number: "789",
      street: "Pine Road",
      unit: "Unit 3B",
      province: "British Columbia",
      postalCode: "G7H 8I9",
    },
    {
      number: "101",
      street: "Oak Boulevard",
      unit: "Floor 4",
      province: "Alberta",
      postalCode: "J1K 2L3",
    },
    {
      number: "202",
      street: "Cedar Lane",
      unit: "Unit 5A",
      province: "Nova Scotia",
      postalCode: "M4N 5O6",
    },
  ];