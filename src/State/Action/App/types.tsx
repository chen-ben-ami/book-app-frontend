import { IBook, ILoginDetails } from "../../../API/interfaces";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const SAVE_LIST = "SAVE_LIST"
export const SAVE_ACESS_TOKEN = "SAVE_ACESS_TOKEN"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const BOOKS_REQUEST = "BOOKS_REQUEST";
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const LOADING_STATE = "LOADING_STATE";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";

export interface ILoginRequest {
    type: typeof LOGIN_REQUEST;
    username: string;
    password: string;
}

export interface IRegisterRequest {
    type: typeof REGISTER_REQUEST;
    username: string;
    password: string;
}

export interface ISaveList {
    type: typeof SAVE_LIST;
    booksList: Array<IBook>;
}

export interface ISaveAcessToken {
    type: typeof SAVE_ACESS_TOKEN;
    acessToken: string;
}

export interface ILogoutRequest {
    type: typeof LOGOUT_REQUEST;
}

export interface IBooksRequest {
    type: typeof BOOKS_REQUEST;
}

export interface ISearchRequest {
    type: typeof SEARCH_REQUEST;
    queryString: string;
}

export interface ILoadingState {
    type: typeof LOADING_STATE;
    isLoading: boolean;
}

export interface ISetErrorMessage {
    type: typeof ERROR_MESSAGE;
    errorMessage: string;
    alertMode: "error" | undefined;
}

export interface ISetSuccessMessage {
    type: typeof SUCCESS_MESSAGE;
    successMessage: string;
    alertMode: "success" | undefined;
}


export type AppActionTypes = ILoginRequest | IRegisterRequest | ISaveList | ISaveAcessToken | ILogoutRequest | IBooksRequest | ISearchRequest | ILoadingState |
    ISetErrorMessage | ISetSuccessMessage

