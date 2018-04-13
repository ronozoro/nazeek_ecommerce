import { ShopTypes } from "../constants/actionTypes";

export default function(state = {}, action) {
    switch(action.type) {
        case ShopTypes.PRODUCTS:
            return  { ...state, products: action.payload};
        case ShopTypes.CATEGORIES:
            return  { ...state, categories: action.payload};
        case ShopTypes.SELLERS:
            return  { ...state, sellers: action.payload};
        case ShopTypes.BRANDS:
            return  { ...state, brands: action.payload};
    }
    return state;
}