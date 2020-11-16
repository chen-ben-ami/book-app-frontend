import produce from 'immer';
import { AppActionTypes } from '../Action/App/types';

export interface IAppState {

}

const initialState: IAppState = {

}


export default function appReducer(state: IAppState = initialState, action: AppActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}