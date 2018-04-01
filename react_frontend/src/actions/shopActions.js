import axios from "axios";
import {ShopTypes} from "../constants/actionTypes";
import {ShopUrls} from "../constants/urls";

function setShopData(payload) {
    return {
        type: ShopTypes.SHOP,
        payload: payload
    };
}
export function getShopData() {
    return function (dispatch) {
        axios.get(ShopUrls.SHOP, {}).then(response => {
            dispatch(setShopData(response.data))
        }).catch((error) => {
        });
    };
}