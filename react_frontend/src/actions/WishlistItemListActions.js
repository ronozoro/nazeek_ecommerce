import * as types from "../../types/actionTypes";
import current_url from "../determineUrl";
export const IS_CREATING_WISHLIST_ITEM="IS_CREATING_WISHLIST_ITEM"
export const CREATE_WISHLIST_ITEM_SUCCESS="CREATE_WISHLIST_ITEM_SUCCESS"
export const CREATE_WISHLIST_ITEM_FAILURE="CREATE_WISHLIST_ITEM_FAILURE"
import { determineHeaders } from "../determineUrl";

const isCreatingWishlistItem = () => ({
  type: IS_CREATING_WISHLIST_ITEM
});

const createWishlistItemSuccess = data => ({
  type: CREATE_WISHLIST_ITEM_SUCCESS,
  data
});

const createWishlistItemFailure = err => ({
  type: CREATE_WISHLIST_ITEM_FAILURE,
  err
});

// Creates a WishlistItem if the Wishlist exists
// Otherwise creates a Wishlist and a WishlistItem
function createWishlistItem(productId, quantity) {
  return async function(dispatch) {
    dispatch(isCreatingWishlistItem());
    try {
      let response = await fetch(`${current_url}/wishlistitems/`, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: determineHeaders(),
        body: JSON.stringify({
          product: productId,
          quantity: quantity
        })
      });
      if (!response.ok) {
        throw new Error(`Unable to add the requested product to
          the shopping cart.`);
      }
      let responseJson = await response.json();
      return dispatch(createWishlistItemSuccess(responseJson));
    } catch (err) {
      return dispatch(createWishlistItemFailure(err));
    }
  };
}

export { createWishlistItem };
