import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  IAddress,
  ICardInformation,
  ICartProduct,
  IDeliveryType,
} from "../../globals/interfaces/structures";
import { formatDate } from "../../globals/helpers/helpers";
import { createData } from "./helpers";

export const Cards: ICardInformation[] = [
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

export const Addresses: IAddress[] = [
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

export const MockData: ICartProduct[] = [
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

export const DeliveryTypes: IDeliveryType[] = [
  {
    type: "Standard",
    description:
      "Standard Delivery takes an estimated 5 days with no additional cost",
    priceIncrease: 0,
    deliveryDate: formatDate(4),
    icon: DeliveryDiningIcon,
  },
  {
    type: "VIP",
    description:
      "VIP Delivery takes an estimated 1 days with R34.00 additional cost",
    priceIncrease: 34,
    deliveryDate: formatDate(1),
    icon: LocalShippingIcon,
  },
];
