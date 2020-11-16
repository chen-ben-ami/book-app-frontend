
export const ORDER_BOOK = "ORDER_BOOK"
export const SHOW_ORDERED = "SHOW_ORDERED"

export interface IOrderBookRequest {
    type: typeof ORDER_BOOK;
    bookId: string;
    acessToken: string;
}





export type UserActionTypes = IOrderBookRequest

