import { IBook } from '../../../API/interfaces';
import * as UserActionTypes from './types';


export function orderBookRequest(bookId: string, acessToken: string): UserActionTypes.IOrderBookRequest {
    return {
        type: UserActionTypes.ORDER_BOOK,
        bookId: bookId,
        acessToken: acessToken,
    }
}

export function removeOrderRequest(): UserActionTypes.IRemoveOrderRequest {
    return {
        type: UserActionTypes.REMOVE_ORDER,
    }
}


export function getOrderedBookRequest(acessToken: string): UserActionTypes.IGetOrdered {
    return {
        type: UserActionTypes.GET_ORDERED,
        acessToken: acessToken,
    }
}