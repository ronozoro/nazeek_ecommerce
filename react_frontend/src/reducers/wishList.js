
import actions from '../actions/WishlistItemCountActions'

export default function(state = {count}, action) {
    switch(action.type) {
    
        case actions.FETCH_WISHLIST_ITEM_COUNT_SUCCESS: 
        console.log('reducer');
            return  { 
                ...state,
              count=action.data
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