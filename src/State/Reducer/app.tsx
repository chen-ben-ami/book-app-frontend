import produce from 'immer';
import { IBook } from '../../API/interfaces';
import { AppActionTypes, ERROR_MESSAGE, LOADING_STATE, LOGOUT_REQUEST, SAVE_ACESS_TOKEN, SAVE_BOOK, SAVE_LIST, SUCCESS_MESSAGE } from '../Action/App/types';

export interface IAppState {
    readonly isLoggedIn: boolean,
    readonly acessToken: string | null,
    readonly isAdmin: boolean,
    readonly booksList: Array<IBook>
    readonly isLoading: boolean,
    readonly alertMessage: string,
    readonly alertMode: "error" | "success" | "info" | "warning" | undefined,

}

const initialState: IAppState = {
    isLoggedIn: false,
    acessToken: null,
    isAdmin: false,
    booksList: [],
    isLoading: false,
    alertMessage: '',
    alertMode: undefined,


}


export default function appReducer(state: IAppState = initialState, action: AppActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_LIST:
                draft.booksList = action.booksList;
                break;
            case SAVE_ACESS_TOKEN:
                draft.acessToken = action.acessToken;
                break;
            case LOGOUT_REQUEST:
                draft.acessToken = null;
                draft.booksList = [];
                draft.isAdmin = false;
                draft.isLoggedIn = false;
                break;
            case SAVE_BOOK:
                draft.booksList.push(action.book);
                break;
            case ERROR_MESSAGE:
                draft.alertMessage = action.errorMessage;
                draft.alertMode = action.alertMode;
                break;
            case SUCCESS_MESSAGE:
                draft.alertMessage = action.successMessage;
                draft.alertMode = action.alertMode;
                break;
            case LOADING_STATE:
                draft.isLoading = action.isLoading;
                break;
            default:
                return state;
        }
    });
}