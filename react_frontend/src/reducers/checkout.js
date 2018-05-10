
import * as actions from '../actions/checkout'
export default function(state = {addresses:[],open:false,id:0}, action) {
    switch(action.type) {
    
        case actions.CHECKOUT_ADDRESS: 
        console.log('reducer');
            return  { 
                ...state,
                addresses:action.addresses,

                };
                case actions.ADD_ADDRESS:
                console.log("dsdfdfd",action.address);
                return{
                    addresses:action.address,
                };
                case actions.USER_ID:
                return{
                    ...state,
                    id:action.id
                }
                case action.ORDER_TOKEN:
                    return{

                    }
                
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