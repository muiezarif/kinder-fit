import {combineReducers} from "redux";
import addContactUsReducer from "./addContactUsReducer";

export default combineReducers({
    addContactUs:addContactUsReducer
})