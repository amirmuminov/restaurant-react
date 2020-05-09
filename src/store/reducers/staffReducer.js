import {DELETE_STAFF_MEMBER, GET_STAFF} from "../actions/types";

const initialState = {
    staff: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_STAFF:
            return{
                ...state,
                staff: action.payload
            };
        case DELETE_STAFF_MEMBER:
            return {
                ...state,
                staff: deleteStaffMember(state.staff, action.payload)
            };
        default:
            return state;
    }
}

const deleteStaffMember = (staff, id) => {
    for (let i = 0; i < staff.length; i++){
        if(staff[i].id === id){
            staff.splice(i, 1);
            break;
        }
    }
    return [...staff];
};