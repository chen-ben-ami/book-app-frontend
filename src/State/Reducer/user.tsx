import produce from 'immer';
import { UserActionTypes } from '../Action/User/types';

export interface IUserState {

}

const initialState: IUserState = {

}


export default function userReducer(state: IUserState = initialState, action: UserActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}