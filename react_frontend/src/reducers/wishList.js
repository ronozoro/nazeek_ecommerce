
import * as actions from '../actions/WishlistItemCountActions'

export default function(state = {count:0}, action) {
    switch(action.type) {
    
        case actions.GETCOUNT: 
        console.log('count');
            return  { 
                ...state,
                };
            return  { 
                state
            };
    }
    return state;
}