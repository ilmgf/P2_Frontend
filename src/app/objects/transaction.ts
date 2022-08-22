import { Cart } from "./Cart";
import { consoles } from "./consoles"

export interface transaction{
    cart: Cart;
    console: consoles;
    quantity: number;
}