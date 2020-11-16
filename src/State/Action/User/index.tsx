import * as UserActionTypes from './types';


export function orderBookRequest(bookId: string, acessToken: string): UserActionTypes.IOrderBookRequest {
    return {
        type: UserActionTypes.ORDER_BOOK,
        bookId: bookId,
        acessToken: acessToken,
    }
}