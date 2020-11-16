import produce from 'immer';
import { IBook } from '../../API/interfaces';
import { SAVE_BOOK, UserActionTypes } from '../Action/User/types';

export interface IUserState {
    readonly orderedBook: IBook | null
}

const initialState: IUserState = {
    orderedBook: null
}


export default function userReducer(state: IUserState = initialState, action: UserActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_BOOK:
                draft.orderedBook = action.orderedBook
                break;
            default:
                return state;
        }
    });
}