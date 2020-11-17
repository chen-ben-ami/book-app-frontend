import { IBook } from '../../../API/interfaces';
import * as AppActions from './types';


export function loginRequest(username: string, password: string): AppActions.ILoginRequest {
    return {
        type: AppActions.LOGIN_REQUEST,
        username: username,
        password: password,
    }
}

export function registerRequest(username: string, password: string): AppActions.IRegisterRequest {
    return {
        type: AppActions.REGISTER_REQUEST,
        username: username,
        password: password,
    }
}

export function logoutRequest(): AppActions.ILogoutRequest {
    return {
        type: AppActions.LOGOUT_REQUEST
    }
}

export function getBooksRequest(): AppActions.IBooksRequest {
    return {
        type: AppActions.BOOKS_REQUEST,
    }
}

export function searchRequest(queryString: string): AppActions.ISearchRequest {
    return {
        type: AppActions.SEARCH_REQUEST,
        queryString: queryString,
    }
}

export function createRequest(book: IBook, acessToken: string): AppActions.ICreateRequest {
    return {
        type: AppActions.CREATE_REQUEST,
        book: book,
        acessToken: acessToken,
    }
}

export function deleteRequest(bookId: string, acessToken: string): AppActions.IDeleteRequest {
    return {
        type: AppActions.DELETE_REQUEST,
        bookId: bookId,
        acessToken: acessToken,
    }
}

export function editRequest(bookId: string, book: IBook, acessToken: string): AppActions.IEditRequest {
    return {
        type: AppActions.EDIT_REQUEST,
        bookId: bookId,
        book: book,
        acessToken: acessToken
    }
}

export function setErrorMessage(errorMessage: string, alertMode: "error" | undefined): AppActions.ISetErrorMessage {
    return {
        type: AppActions.ERROR_MESSAGE,
        errorMessage: errorMessage,
        alertMode: alertMode,
    }
}

export function setSuccessMessage(successMessage: string, alertMode: "success" | undefined): AppActions.ISetSuccessMessage {
    return {
        type: AppActions.SUCCESS_MESSAGE,
        successMessage: successMessage,
        alertMode: alertMode,
    }
}