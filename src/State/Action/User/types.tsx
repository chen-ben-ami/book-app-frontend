import { IBook } from "../../../API/interfaces";

export const ORDER_BOOK = "ORDER_BOOK";
export const SAVE_ORDERED_BOOK = "SAVE_ORDERED_BOOK";
export const GET_ORDERED = "GET_ORDERED"
export const REMOVE_ORDER = "REMOVE_ORDER";

export interface IOrderBookRequest {
    type: typeof ORDER_BOOK;
    bookId: string;
    acessToken: string;
}

export interface IRemoveOrderRequest {
    type: typeof REMOVE_ORDER;
}


export interface IShowOrder {
    type: typeof SAVE_ORDERED_BOOK;
    orderedBook: IBook;
}

export interface IGetOrdered {
    type: typeof GET_ORDERED;
    acessToken: string
}



export type UserActionTypes = IOrderBookRequest | IShowOrder | IRemoveOrderRequest | IGetOrdered;

