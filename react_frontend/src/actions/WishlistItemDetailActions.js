import current_url from "../determineUrl";
import {determineHeaders} from "../determineUrl";
export const IS_EDITING_WISHLIST_ITEM_QUANTITY="IS_EDITING_WISHLIST_ITEM_QUANTITY"
export const EDIT_WISHLIST_ITEM_QUANTITY_SUCCESS="EDIT_WISHLIST_ITEM_QUANTITY_SUCCESS"
export const EDIT_WISHLIST_ITEM_QUANTITY_FAILURE="EDIT_WISHLIST_ITEM_QUANTITY_FAILURE"
/* SHOPPING CART DETAIL ACTIONS */
const isEditingWishlistItemQuantity = () => ({
    type: IS_EDITING_WISHLIST_ITEM_QUANTITY
});

const editWishlistItemQuantitySuccess = () => ({
    type: EDIT_WISHLIST_ITEM_QUANTITY_SUCCESS
});

const editWishlistItemQuantityFailure = err => ({
    type: EDIT_WISHLIST_ITEM_QUANTITY_FAILURE,
    err
});

// Deletes a shoppingcartitem
function deleteWishlistItem(wishlistId, itemId) {
    return async function (dispatch) {
        dispatch(isEditingWishlistItemQuantity());
        try {
            let response = await fetch(
                `${current_url}/wishlist/${wishlistId}/wishlistitems/${itemId}/?token=`,
                {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }
            );
            if (!response.ok) {
                throw new Error(`Unable to delete the requested wishlist item.`);
            }
            return dispatch(editWishlistItemQuantitySuccess());
        } catch (err) {
            return dispatch(editWishlistItemQuantityFailure(err));
        }
    };
}

function editWishlistItemQuantity(wishlistId, itemId, quantity) {
    return async function (dispatch) {
        dispatch(isEditingWishlistItemQuantity());
        try {
            let response = await fetch(
                `${current_url}/wishlist/${wishlistId}/wishlistitems/${itemId}/`,
                {
                    method: "PATCH",
                    credentials: "include",
                    mode: "cors",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({quantity})
                }
            );
            if (!response.ok) {
                throw new Error(`Unable to update the quantity of the wishlist item.`);
            }
            return dispatch(editWishlistItemQuantitySuccess());
        } catch (err) {
            return dispatch(editWishlistItemQuantityFailure(err));
        }
    };
}

export {deleteWishlistItem, editWishlistItemQuantity};
