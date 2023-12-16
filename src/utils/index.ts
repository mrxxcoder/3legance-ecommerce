import { IProduct } from "../interfaces";

export function calculateTotalPrice(products: IProduct[]) {
  const totalPrice = products.reduce(
    (acc, cur) => cur.price * cur.quantity + acc,
    0
  );
  return totalPrice;
}
