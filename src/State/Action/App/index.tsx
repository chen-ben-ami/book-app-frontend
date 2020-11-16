import { ILoginDetails } from '../../../API/interfaces';
import * as AppActions from './types';


export function loginRequest(loginDetails: ILoginDetails): AppActions.ILoginRequest {
    return {
        type: AppActions.LOGIN_REQUEST,
        loginDetails: loginDetails
    }
}

export function registerRequest(loginDetails: ILoginDetails): AppActions.IRegisterRequest {
    return {
        type: AppActions.REGISTER_REQUEST,
        loginDetails: loginDetails
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
        queryString: queryString
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