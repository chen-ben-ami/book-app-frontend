import { take, call, put } from 'redux-saga/effects';
import { ILoginDetails } from '../../API/interfaces';
import * as ApiMethods from '../../API/app';
import { BOOKS_REQUEST, ERROR_MESSAGE, LOADING_STATE, LOGIN_REQUEST, REGISTER_REQUEST, SAVE_ACESS_TOKEN, SAVE_LIST } from '../Action/App/types';



function* LoginFlow(loginDetails: ILoginDetails) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.login, loginDetails);
        yield put({ type: SAVE_ACESS_TOKEN, acessToken: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchLogin() {
    while (true) {
        const loginDetails: ILoginDetails = yield take(LOGIN_REQUEST);
        yield call(LoginFlow, loginDetails);
    }
};


function* registerFlow(loginDetails: ILoginDetails) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.register, loginDetails);
        yield put({ type: SAVE_ACESS_TOKEN, acessToken: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchRegister() {
    while (true) {
        const loginDetails: ILoginDetails = yield take(REGISTER_REQUEST);
        yield call(registerFlow, loginDetails);
    }
};


function* getBooksFlow() {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.getBooks);
        yield put({ type: SAVE_LIST, booksList: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchFetchBooks() {
    while (true) {
        yield take(BOOKS_REQUEST);
        yield call(getBooksFlow);
    }
};


