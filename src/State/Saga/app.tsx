import { take, call, put } from 'redux-saga/effects';
import { IBook } from '../../API/interfaces';
import * as ApiMethods from '../../API/app';
import { BOOKS_REQUEST, CREATE_REQUEST, DELETE_REQUEST, EDIT_REQUEST, ERROR_MESSAGE, LOADING_STATE, LOGIN_REQUEST, REGISTER_REQUEST, SAVE_ACESS_TOKEN, SAVE_BOOK, SAVE_LIST, SEARCH_REQUEST } from '../Action/App/types';



function* LoginFlow(username: string, password: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.login, username, password);
        yield put({ type: SAVE_ACESS_TOKEN, acessToken: res.data.acessToken });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: "No user found... wrong username or password", alertMode: "error" });
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
        const { queryString } = yield take(SEARCH_REQUEST);
        yield call(searchBookFlow, queryString);
    }
};

function* createBookFlow(book: IBook, acessToken: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.createBook, book, acessToken);
        yield put({ type: SAVE_BOOK, book: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchCreateBook() {
    while (true) {
        const { book, acessToken } = yield take(CREATE_REQUEST);
        yield call(createBookFlow, book, acessToken);
    }
};

function* editBookFlow(bookId: string, book: IBook, acessToken: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.updateBook, bookId, book, acessToken);
        yield put({ type: SAVE_LIST, booksList: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchEditBook() {
    while (true) {
        const { bookId, book, acessToken } = yield take(EDIT_REQUEST);
        yield call(editBookFlow, bookId, book, acessToken);
    }
};

function* deleteBookFlow(bookId: string, acessToken: string) {
    try {
        yield put({ type: ERROR_MESSAGE, errorMessage: '' });
        yield put({ type: LOADING_STATE, isLoading: true });
        const res = yield call(ApiMethods.deleteBook, bookId, acessToken);
        yield put({ type: SAVE_LIST, booksList: res.data });
    }
    catch (error) {
        yield put({ type: ERROR_MESSAGE, errorMessage: error.message });
    } finally {
        yield put({ type: LOADING_STATE, isLoading: false });
    }
};

export function* watchDeleteBook() {
    while (true) {
        const { bookId, acessToken } = yield take(DELETE_REQUEST);
        yield call(deleteBookFlow, bookId, acessToken);
    }
};



