import { SvgIconProps } from "@mui/material";

export interface IAddress {
  number: string;
  street: string;
  unit: string;
  province: string;
  postalCode: string;
}

export interface ICardInformation {
  name: string;
  cardNumber: string;
  expiryDate: string;
}

export interface ICartProduct {
  description: string;
  quantity: string;
  color: string;
  size: string;
  price: string;
  discount: string;
}

export interface IDeliveryType {
  type: string;
  description: string;
  priceIncrease: number;
  deliveryDate: string;
  icon: React.ElementType<SvgIconProps>;
}

export interface ISelectedValues {
  color: string;
  size: number | undefined;
  quantity: number;
}

export interface IShoe {
  name: string;
  price: number;
  discount: boolean;
  discountedPrice: number;
  images: string[];
  colors: string[];
  sizes: number[];
}

export interface ISocials {
  platform: string;
  handle: string;
  icon:  React.ElementType<SvgIconProps>;
}

export interface ISupport {
  location: string;
  link?: string;
}
