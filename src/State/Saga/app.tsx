import { take, call, put } from 'redux-saga/effects';
import { ILoginDetails } from '../../API/interfaces';
import * as ApiMethods from '../../API/app';
import { BOOKS_REQUEST, ERROR_MESSAGE, LOADING_STATE, LOGIN_REQUEST, REGISTER_REQUEST, SAVE_ACESS_TOKEN, SAVE_LIST, SEARCH_REQUEST } from '../Action/App/types';



function* LoginFlow(username: string, password: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.login, username, password);
        yield put({ type: SAVE_ACESS_TOKEN, acessToken: res.data.acessToken });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchLogin() {
    while (true) {
        const { username, password } = yield take(LOGIN_REQUEST);
        yield call(LoginFlow, username, password);
    }
};


function* registerFlow(username: string, password: string) {
    try {
        console.log(username)
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.register, username, password);
        yield put({ type: SAVE_ACESS_TOKEN, acessToken: res.data.acessToken });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchRegister() {
    while (true) {
        const { username, password } = yield take(REGISTER_REQUEST);
        yield call(registerFlow, username, password);
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

function* searchBookFlow(queryString: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.searchBooks, queryString);
        yield put({ type: SAVE_LIST, booksList: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchSearchBook() {
    while (true) {
        const {queryString} = yield take(SEARCH_REQUEST);
        yield call(searchBookFlow, queryString);
    }
};



