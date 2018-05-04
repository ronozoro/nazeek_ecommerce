import * as types from "../../types/actionTypes";
import current_url from "../determineUrl";
import { determineHeaders } from "../determineUrl";

const isFetchingReviewsForProduct = () => ({
  type: types.IS_FETCHING_REVIEWS_FOR_PRODUCT
});

const fetchReviewsForProductSuccess = data => ({
  type: types.FETCH_REVIEWS_FOR_PRODUCT_SUCCESS,
  data
});

const fetchReviewsForProductFailure = err => ({
  type: types.FETCH_REVIEWS_FOR_PRODUCT_FAILURE,
  err
});

function fetchReviewsForProduct(productId) {
  return async function(dispatch) {
    dispatch(isFetchingReviewsForProduct());
    try {
      let response = await fetch(`${current_url}/reviews/${productId}/`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: determineHeaders()
      });
      if (!response.ok) {
        throw new Error("Unable to fetch the reviews for this product.");
      }
      let responseJson = await response.json();
      return dispatch(fetchReviewsForProductSuccess(responseJson));
    } catch (err) {
      return dispatch(fetchReviewsForProductFailure(err));
    }
  };
}

const isCreatingReviewForProduct = () => ({
  type: types.IS_CREATING_REVIEW_FOR_PRODUCT
});

const createReviewForProductSuccess = data => ({
  type: types.CREATE_REVIEW_FOR_PRODUCT_SUCCESS,
  data
});

const createReviewForProductFailure = err => ({
  type: types.CREATE_REVIEW_FOR_PRODUCT_FAILURE,
  err
});
function createReviewForProduct(product, value, comment_text) {
  return async function(dispatch) {
    dispatch(isCreatingReviewForProduct());
    try {
      let response = await fetch(`${current_url}/reviews/${product}/`, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: determineHeaders(),
        body: JSON.stringify({ product, value, comment_text })
      });
      if (!response.ok) {
        throw new Error("Unable to create the review for this product.");
      }
      let responseJson = await response.json();
      return dispatch(createReviewForProductSuccess(responseJson));
    } catch (err) {
      return dispatch(createReviewForProductFailure(err));
    }
  };
}

export { fetchReviewsForProduct, createReviewForProduct };
