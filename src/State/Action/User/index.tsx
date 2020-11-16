import * as UserActionTypes from './types';


export function setErrorMessage(errorMessage: string, alertMode: "error" | undefined): UserActionTypes.ISetErrorMessage {
    return {
        type: UserActionTypes.ERROR_MESSAGE,
        errorMessage: errorMessage,
        alertMode: alertMode,
    }
}

export function setSuccessMessage(successMessage: string, alertMode: "success" | undefined): UserActionTypes.ISetSuccessMessage {
    return {
        type: UserActionTypes.SUCCESS_MESSAGE,
        successMessage: successMessage,
        alertMode: alertMode,
    }
}