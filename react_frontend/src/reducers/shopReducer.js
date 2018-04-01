import { ShopTypes } from "../constants/actionTypes";

export default function(state = {}, action) {
    switch(action.type) {
        case ShopTypes.SHOP:
            return  { ...state, products: action.payload};
    }
    return state;
}