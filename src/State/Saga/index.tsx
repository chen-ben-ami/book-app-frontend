import { all } from 'redux-saga/effects';
import { watchCreateBook, watchDeleteBook, watchEditBook, watchFetchBooks, watchLogin, watchRegister, watchSearchBook } from './app';
import { watchOrderBook, watchOrderedBook } from './user';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),
        watchFetchBooks(),
        watchSearchBook(),
        watchOrderBook(),
        watchCreateBook(),
        watchEditBook(),
        watchDeleteBook(),
        watchOrderedBook(),
    ]);
}
