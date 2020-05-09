import {combineReducers} from "redux";
import mealReducer from "./mealReducer";
import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import staffReducer from "./staffReducer";
import orderReducer from "./orderReducer";
import stockReducer from "./stockReducer";

export default combineReducers({
    mealReducer,
    authReducer,
    roleReducer,
    staffReducer,
    orderReducer,
    stockReducer
});