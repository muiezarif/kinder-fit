import * as TYPES from "../actions/types"
export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.ADD_CONTACT_US:
            return {...state,addContactUsData:action.payload}
        default:
            return state;
    }
}