import { take, call, put } from 'redux-saga/effects';
import { ERROR_MESSAGE, LOADING_STATE } from '../Action/App/types';
import * as ApiMethods from '../../API/app';
import { ORDER_BOOK, SAVE_ORDERED_BOOK } from '../Action/User/types';



function* orderBookFlow(bookId: string, acessToken: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.orderBook, bookId, acessToken);
        yield put({ type: SAVE_ORDERED_BOOK, orderedBook: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchOrderBook() {
    while (true) {
        const { bookId, acessToken } = yield take(ORDER_BOOK);
        yield call(orderBookFlow, bookId, acessToken);
    }
};