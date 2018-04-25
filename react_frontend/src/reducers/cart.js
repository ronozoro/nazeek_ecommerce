
import {cartTypes} from '../constants/actionTypes';
export default function(state = {cart:[],count:0,products:[],variation:[],alldata:[]}, action) {
    switch(action.type) {
    
        case cartTypes.SET_TO_CART: 
        console.log('reducer');
        
               
            return  { 
                ...state,
                 cart: action.items,
                 count:action.count,
                 products:state.products.concat(action.product),
                 variation:state.variation.concat(action.variation),
                };
        case cartTypes.CARTITEMS:
        return {
            ...state,
            cart: action.items,
            count:action.count,
        }
            return  { 
                state
            };
    }
    return state;
}