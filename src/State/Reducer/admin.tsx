import produce from 'immer';
import { AdminActionTypes } from '../Action/Admin/types';

export interface IAdminState {

}

const initialState: IAdminState = {

}


export default function adminReducer(state: IAdminState = initialState, action: AdminActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}