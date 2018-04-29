
import * as actions from '../actions/checkout'
export default function(state = {addresses:[],open:false}, action) {
    switch(action.type) {
    
        case actions.CHECKOUT_ADDRESS: 
        console.log('reducer');
            return  { 
                ...state,
                addresses:action.addresses,

                };
                case actions.ADD_ADDRESS:
                return{
                    addresses:action.address,

                };
                case actions.OPEN:
                return{
                    ...state,
                    open:true
                 }
                 case actions.CLOSE:
                return{
                    ...state,
                    open:false
                 }            
                return  { 
                    state
                };
    }
    return state;
}