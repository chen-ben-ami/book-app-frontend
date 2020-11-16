import axios from './index';
import { IBook, ILoginDetails } from './interfaces';

const GET_BOOKS = '/';
const LOGIN = '/login';
const REGISTER = '/register';
const ADMIN_BOOK = '/book';
const ORDER_BOOK = '/user/order-book';
const GET_BOOK = '/user/get-book';
const SEARCH_BOOKS = '/search-books';

export const login = (loginDetails: ILoginDetails) => {
    return axios.post(LOGIN, loginDetails)
}


export const register = (loginDetails: ILoginDetails) => {
    return axios.post(REGISTER, loginDetails)
}

export const getBooks = () => {
    return axios.get(GET_BOOKS)
}

export const searchBooks = (queryString: string) => {
    return axios.get(SEARCH_BOOKS + `+queryString=${queryString}`);
}

export const createBook = (book:IBook, acessToken: string) => {
    return axios.post(ADMIN_BOOK, book, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const deleteBook = (bookId: string, acessToken: string) => {
    return axios.delete(ADMIN_BOOK + `bookId=${bookId}`, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const updateBook = (bookId: string,updatedBook:IBook, acessToken: string) => {
    return axios.put(ADMIN_BOOK + `bookId=${bookId}`, updateBook, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const orderBook = (bookId: string, acessToken: string) => {
    return axios.put(ORDER_BOOK + `bookId=${bookId}`, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}

export const getOrderedBook = (bookId: string, acessToken: string) => {
    return axios.put(GET_BOOK + `bookId=${bookId}`, {
        headers: { 'Authorization': `Bearer ${acessToken}` }
    });
}