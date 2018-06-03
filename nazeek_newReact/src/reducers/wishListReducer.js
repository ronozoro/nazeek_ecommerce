
import {
  GET_WISHLIST_COUNT,
  GET_WISHLIST_ITEMS,
  GET_WISHLIST_ID,
  DELETE_WISHLIST_ITEM
} from '../constant/actionsType'

const initialState = {
  count: 0,
  wishListId: null,
  wishListItem: [],
  itemDelete: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WISHLIST_COUNT:
      return {
        ...state,
        count: action.count
      }
    case GET_WISHLIST_ITEMS:
      return {
        ...state,
        wishListItem: action.items
      }
    case GET_WISHLIST_ID:
      return {
        ...state,
        wishListId: action.id
      }
    case DELETE_WISHLIST_ITEM:
      return {
        ...state,
        itemDelete: action.item
      }
  }
  return state
}
