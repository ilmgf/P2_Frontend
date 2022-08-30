import { Cart } from "./Cart";
import { Console } from "./Console"

export interface Transaction{
    cart: Cart;
    console: Console;
    quantity: number;
}