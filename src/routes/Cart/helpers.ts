import { ICartProduct } from "../../globals/interfaces/structures";

export function createData(product: ICartProduct) {
    const { description, quantity, color, size, price, discount } = product;
    return { description, quantity, color, size, price, discount };
  }