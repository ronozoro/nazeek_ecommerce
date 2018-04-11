import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {reducer as notifReducer} from 'redux-notifications';

import authReducer from "./authReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
    form: formReducer,
    notifs: notifReducer,
    auth: authReducer,
    shop: shopReducer

});

export default rootReducer;
