import axios from './index';
import { IBook } from './interfaces';

const GET_BOOKS = '/';
const LOGIN = '/login';
const REGISTER = '/register';
const ADMIN_BOOK = '/admin/book';
const ORDER_BOOK = '/user/order-book';
const GET_BOOK = '/user/get-order';
const SEARCH_BOOKS = '/search-books';

export const login = (username: string, password: string) => {
    const data = { username: username, password: password }
    return axios.post(LOGIN, data);
}


export const register = (username: string, password: string) => {
    const data = { username: username, password: password }
    return axios.post(REGISTER, data);
}

export const getBooks = () => {
    return axios.get(GET_BOOKS)
}

export const searchBooks = (queryString: string) => {
    return axios.get(SEARCH_BOOKS + `?queryString=${queryString}`);
}

export const createBook = (book: IBook, acessToken: string) => {
    return axios.post(ADMIN_BOOK, book, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const deleteBook = (bookId: string, acessToken: string) => {
    return axios.delete(ADMIN_BOOK + `?bookId=${bookId}`, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const updateBook = (bookId: string, updatedBook: IBook, acessToken: string) => {
    return axios.put(ADMIN_BOOK + `?bookId=${bookId}`, updatedBook, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const orderBook = (bookId: string, acessToken: string) => {
    return axios.put(ORDER_BOOK + `?bookId=${bookId}`, null, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const getOrderedBook = (acessToken: string) => {
    return axios.get(GET_BOOK, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}