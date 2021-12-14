import {usersAPI} from '../api/api';
let initialState = {
    users: []
}
const cabinetReducer = (state = initialState, action) => {
    let type = action.type;
    switch (type) {
        
        
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.userData]
            }
        }
        case REMOVE_USER: {
            
            const temp = [...state.users];
            temp.filter(item => item.id !== action.userId)

            return {
                ...state,
                users: [...state.users].filter(user => user.id !== action.userId)
            }
        }
        default:
            return state;
    }
}
const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

export const setUsers = users => ({ type: SET_USERS, users });
export const addUser = userData => ({ type: ADD_USER, userData });
export const removeUser = userId => ({ type: REMOVE_USER, userId });

export const getUsersThunk = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(data=>{
            return(
                dispatch(setUsers(data))
            )
        })
    }
}
export const addUserThunk = (userData) => {
    return (dispatch) => {
        usersAPI.addUser(userData).then(response=>{
            return(
                dispatch(addUser(response.data))
            )
            
        })
    }
}
export const removeUserThunk = (userId) => {
    return (dispatch) => {
        usersAPI.removeUser(userId).then(response=>{
            return(
                dispatch(removeUser(userId))
            )
            
        })
    }
}
export default cabinetReducer;