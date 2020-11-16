import { combineReducers } from 'redux';
import appReducer from './app';
import adminReducer from "./admin";
import userReducer from "./user";

export const rootReducer = () => combineReducers({
	app: appReducer,
	admin: adminReducer,
	user: userReducer
});