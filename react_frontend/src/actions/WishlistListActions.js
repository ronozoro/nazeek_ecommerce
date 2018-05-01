import  types from "../constants/actionTypes";
import current_url from "../determineUrl";
import { determineHeaders } from "../determineUrl";

const isFetchingWishListAndItems = () => ({
  type: types.IS_FETCHING_WISHLIST_AND_ITEMS
});

const fetchWishlistAndItemsSuccess = data => ({
  type: types.FETCH_WISHLIST_AND_ITEMS_SUCCESS,
  data
});

const fetchWishlistAndItemsFailure = err => ({
  type: types.FETCH_WISHLIST_AND_ITEMS_FAILURE,
  err
});

function fetchWishlistAndItems() {
  return async function(dispatch) {
    dispatch(isFetchingWishListAndItems());
    try {
      let response = await fetch(`${current_url}/wishlist/`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: determineHeaders()
      });
      if (!response.ok) {
        throw new Error("Unable to fetch wishlist and items");
      }
      let responseJson = await response.json();
      return dispatch(fetchWishlistAndItemsSuccess(responseJson));
    } catch (err) {
      return dispatch(fetchWishlistAndItemsFailure(err));
    }
  };
}

export { fetchWishlistAndItems };
