import { all } from 'redux-saga/effects';
import { watchFetchBooks, watchLogin, watchRegister } from './app';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),
        watchFetchBooks(),
    ]);
}
