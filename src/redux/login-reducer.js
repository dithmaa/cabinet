import {authAPI} from '../api/api';
let initialState = {
    authData: [],
    formData : ''
}
const loginReducer = (state = initialState, action) => {
    let type = action.type;
    switch (type) {
        
        
        case SET_AUTH_DATA: {
            return {
                ...state,
                authData: [...state.authData, action.authData]
            }
        }
        case SET_FORM_DATA: {
            return {
                ...state,
                formData: [...state.formData, action.formData]
            }
        }
        default:
            return state;
    }
}
const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_FORM_DATA = 'SET_FORM_DATA';

export const setAuthData = authData => ({ type: SET_AUTH_DATA, authData });
export const setFormData = formData => ({ type: SET_FORM_DATA, formData });

export const getAuthDataThunk = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(data=>{
            return(
                dispatch(setAuthData(data))
            )
        })
    }
}
export default loginReducer;