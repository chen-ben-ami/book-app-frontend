import { IBook } from "../../../API/interfaces"

export const ORDER_BOOK = "ORDER_BOOK"
export const SAVE_BOOK = "SAVE_BOOK"

export interface IOrderBookRequest {
    type: typeof ORDER_BOOK;
    bookId: string;
    acessToken: string;
}


export interface IShowOrder {
    type: typeof SAVE_BOOK;
    orderedBook: IBook
}




export type UserActionTypes = IOrderBookRequest | IShowOrder

