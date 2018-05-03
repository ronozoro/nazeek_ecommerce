
import * as actions from '../actions/WishlistListActions'

export default function (state = { count: 0, wishListItem: [], id: null }, action) {
    switch (action.type) {

        case actions.GETCOUNT:
            console.log('count', action.count);
            return {
                ...state,
                count: action.count
            };
        case actions.GETITEMS:
            return {
                ...state,
                wishListItem: action.items
            };
        case actions.GETwISHLISTID:
            return {
                ...state,
                wishListId: action.id
            }
            return {
                state
            };
    }
    return state;
}