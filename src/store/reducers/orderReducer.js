import {ADD_ORDER, CALCULATE_BILL, EDIT_ORDER, GET_ORDERS} from "../actions/types";

const initialState = {
    orders: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        case CALCULATE_BILL:
            return {
                ...state,
                orders: calculateBill(state.orders, action.payload)
            };
        case EDIT_ORDER:
            return {
                ...state,
                orders: editOrder(state.orders, action.payload)
            };
        default:
            return state;
    }
}

const editOrder = (orders, order) => {
    for (let i = 0; i < orders.length; i++){
        if (orders[i].id === order.id){
            orders[i] = order;
            break;
        }
    }
    return [...orders];
};

const calculateBill = (orders, id) => {
    for (let i = 0; i < orders.length; i++){
        if (orders[i].id === id){
            orders[i].status = 'PAYED';
            break;
        }
    }
    return [...orders];
};