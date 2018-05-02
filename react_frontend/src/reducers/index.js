import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {reducer as notifReducer} from 'redux-notifications';

import authReducer from "./authReducer";
import shopReducer from "./shopReducer";
import cartReducer from './cart'
import checkoutReducer from './checkout'
import header from './header'
import wishList from './wishList'
const rootReducer = combineReducers({
    form: formReducer,
    notifs: notifReducer,
    auth: authReducer,
    shop: shopReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
    header:header,
    wishList:wishList


});

export default rootReducer;
