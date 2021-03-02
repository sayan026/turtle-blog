import { combineReducers } from "redux";
import Auth from "./reducers/auth";
import User from "./reducers/user";

export default combineReducers({
    "auth": Auth,
    "user": User
});
