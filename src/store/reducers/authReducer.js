import {LOGIN, LOGOUT, SIGN_UP} from "../actions/types";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const initialState = {
    isAuth: null,
    currentUsername: null,
    isSignUpSuccess: false
};

export default function (state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            const access_token = jwt_decode(action.payload);
            localStorage.setItem("username", access_token.sub);
            localStorage.setItem("user_id", access_token.user_id);
            if(access_token.exp * 1000 > new Date().getTime()){
                axios.defaults.headers.common["Authorization"] = action.payload;
                return{
                    ...state,
                    isAuth: true,
                    currentUsername: access_token.sub
                };
            }
            return {
                ...state,
                isAuth: null,
                currentUsername: null
            };
        case SIGN_UP:
            return {
                ...state,
                isSignUpSuccess: !state.isSignUpSuccess
            };
        case LOGOUT:
            localStorage.removeItem("access_token");
            localStorage.removeItem("username");
            localStorage.removeItem("user_id");
            delete axios.defaults.headers.common["Authorization"];
            window.location.reload();
            return{
                ...state,
                isAuth: null,
                currentUsername: null
            };
        default:
            return state;
    }
}