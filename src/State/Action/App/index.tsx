import * as AppActions from './types';


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