import axios from 'axios';
import {GET_STOCKS} from "./types";

export const getStocks = () => dispatch => {
    axios.get("/stock")
        .then(response =>
            dispatch({
                type: GET_STOCKS,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};