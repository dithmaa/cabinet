import {applyMiddleware, combineReducers, createStore} from "redux";
import cabinetReducer from './cabinet-reducer';
import loginReducer from './login-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'; 
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    cabinetPage: cabinetReducer,
    loginPage: loginReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store; // for debugger