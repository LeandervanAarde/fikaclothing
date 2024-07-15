export interface IShoe {
  name: string;
  price: number;
  discount: boolean;
  discountedPrice: number;
  images: string[];
  colors: string[];
  sizes: number[];
}

export interface ISelectedValues {
  color: string;
  size: number | undefined;
  quantity: number;
}

export type ProductProps = {};
