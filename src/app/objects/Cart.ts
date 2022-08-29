import { Transaction } from "./Transaction";

export interface Cart{
    cartNum:number;
    totalPrice:number;
    transactions:Transaction[];
}