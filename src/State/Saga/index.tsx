import { all } from 'redux-saga/effects';
import { watchFetchBooks, watchLogin, watchRegister, watchSearchBook } from './app';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),
        watchFetchBooks(),
        watchSearchBook(),
    ]);
}
