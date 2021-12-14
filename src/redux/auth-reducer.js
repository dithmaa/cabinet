import {authAPI, profileAPI} from '../api/api';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authAvatar: null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH_AVATAR:
            return {
                ...state,
                authAvatar: action.avatar
            }

        default:
            return state;
    }
}

const
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    SET_AUTH_AVATAR = 'SET_AUTH_AVATAR';

export let setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } });
export let setAuthAvatar = (avatar) => ({ type: SET_AUTH_AVATAR, avatar });

//Thunk

export const getAuthUserData = () => {
    return (
        (dispatch) => { authAPI.authMe().then((data) => {  
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                    profileAPI.getProfile(id).then((data) => {
                        dispatch(setAuthAvatar(data.photos.small));

                    });
                }
            });
        }
    )
}

// login && logout thunks
export const login = (email, password, rememberMe) => {
    return (
        (dispatch) => { authAPI.login(email, password, rememberMe).then((data) => {  
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
            });
        }
    )
}
export const logout = () => {
    return (
        (dispatch) => { authAPI.logout().then((data) => {  
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
        }
    )
}

export default authReducer;


