import axios from 'axios';
import {DELETE_STAFF_MEMBER, GET_STAFF} from "./types";

export const getStaff = () => dispatch => {
    axios.get("/user")
        .then(response =>
            dispatch({
                type: GET_STAFF,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const deleteStaffMember = (id) => dispatch => {
    axios.delete(`/user/${id}`)
        .then(response =>
                dispatch({
                    type: DELETE_STAFF_MEMBER,
                    payload: id
                })
            )
        .catch(error => console.log(error));
};