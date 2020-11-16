import * as AdminActions from './types';


export function setErrorMessage(errorMessage: string, alertMode: "error" | undefined): AdminActions.ISetErrorMessage {
    return {
        type: AdminActions.ERROR_MESSAGE,
        errorMessage: errorMessage,
        alertMode: alertMode,
    }
}

export function setSuccessMessage(successMessage: string, alertMode: "success" | undefined): AdminActions.ISetSuccessMessage {
    return {
        type: AdminActions.SUCCESS_MESSAGE,
        successMessage: successMessage,
        alertMode: alertMode,
    }
}