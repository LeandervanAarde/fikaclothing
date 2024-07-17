import { ICartProduct, ICartTotals } from "../../globals/interfaces/structures";

export function createData(product: ICartProduct) {
    const { description, quantity, color, size, price, discount } = product;
    return { description, quantity, color, size, price, discount };
  }


  export function CalculateCartTotals(cart: ICartTotals){
    const { Price,
      Delivery,
      Discount} = cart;

      return (Price + Delivery + Discount) - Discount;
  }