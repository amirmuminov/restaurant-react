import axios from 'axios';
import {ADD_ORDER, CALCULATE_BILL, EDIT_ORDER, GET_ORDERS} from "./types";

export const getOrders = () => dispatch => {
    axios.get("/order")
        .then(response =>
            dispatch({
                type: GET_ORDERS,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const addOrder = order => dispatch => {
    order.pickerId = localStorage.getItem("user_id");
    axios.post("/order", order)
        .then(response =>
            dispatch({
                type: ADD_ORDER,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const calculateBill = id => dispatch => {
    axios.get(`/order/${id}/bill`).
        then(response => {
        dispatch({
            type: CALCULATE_BILL,
            payload: id
        });
        alert("The bill is: $" + response.data);
    })
        .catch(error => console.log(error))
};

export const editOrder = (orderId, mealId) => dispatch => {
    axios.put(`/order/${orderId}/meal/${mealId}`)
        .then(response =>
            dispatch({
                type: EDIT_ORDER,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

