import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {reducer as notifReducer} from 'redux-notifications';

import authReducer from "./authReducer";
import shopReducer from "./shopReducer";
import cartReducer from './cart'
import checkoutReducer from './checkout'
import wishList from './wishList'
import filterMenu from './filterMenu'
const rootReducer = combineReducers({
    form: formReducer,
    notifs: notifReducer,
    auth: authReducer,
    shop: shopReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
    wishList:wishList,
    filterMenu:filterMenu


});

export default rootReducer;
