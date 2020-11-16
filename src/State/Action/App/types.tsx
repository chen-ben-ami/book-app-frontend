export const LOADING_STATE = "LOADING_STATE";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";

export interface ILoadingState {
    type: typeof LOADING_STATE,
    isLoading: boolean,
}

export interface ISetErrorMessage {
    type: typeof ERROR_MESSAGE,
    errorMessage: string,
    alertMode: "error" | undefined
}

export interface ISetSuccessMessage {
    type: typeof SUCCESS_MESSAGE,
    successMessage: string,
    alertMode: "success" | undefined
}


export type AppActionTypes = ILoadingState |
    ISetErrorMessage | ISetSuccessMessage

