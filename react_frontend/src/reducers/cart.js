
import {cartTypes} from '../constants/actionTypes';
export default function(state = {cart:[],cartItems:[],count:0,products:[]}, action) {
    switch(action.type) {
    
        case cartTypes.SET_TO_CART: 
        console.log('reducer');
        
               
            return  { 
                ...state,
                 cart: action.items,
                 cartItems:action.items,
                 count:action.count,
                 products:state.products.concat(action.product),
                };
        case cartTypes.CARTITEMS:
        return {
            ...state,
            cartItems: action.items,
            count:action.count,
        }
            return  { 
                state
            };
    }
    return state;
}