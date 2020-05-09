import axios from 'axios';
import {LOGIN, LOGOUT, SIGN_UP} from './types';


export const login = (user) => dispatch => {
    axios.post('auth', user)
        .then(response => {
            localStorage.setItem("access_token", response.headers.authorization);
            dispatch({
                type: LOGIN,
                payload: response.headers.authorization
            })
        })
        .catch(error => console.log(error))
};

export const signUp = (user) => dispatch => {
    axios.post("/user", user)
        .then(response => {
            dispatch({
                type: SIGN_UP
            });

            setTimeout(() => {
                dispatch({
                    type: SIGN_UP
                });
            }, 1000)

        })
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
};
