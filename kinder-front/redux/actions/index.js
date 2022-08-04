import baseApi from "../../api/baseApi";
import * as TYPES from "../actions/types";

export const addContactUsForm = (data)=>{
    return async (dispatch)=>{
        const response = await baseApi.post("/contact",{...data});
        dispatch({type:TYPES.ADD_CONTACT_US,payload:response.data});
    }
}