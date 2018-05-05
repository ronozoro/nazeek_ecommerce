import * as ReviewsUrl from '../constants/urls'
export const REVIEWSLIST="REVIEWSLIST"
import current_url from "../determineUrl";
import {getuserId} from './checkout'
import { determineHeaders } from "../determineUrl";
import axios from 'axios'
import { getUserProfile } from './authActions';
// const isFetchingReviewsForProduct = () => ({
//   type: types.IS_FETCHING_REVIEWS_FOR_PRODUCT
// });

// const fetchReviewsForProductSuccess = data => ({
//   type: types.FETCH_REVIEWS_FOR_PRODUCT_SUCCESS,
//   data
// });

// const fetchReviewsForProductFailure = err => ({
//   type: types.FETCH_REVIEWS_FOR_PRODUCT_FAILURE,
//   err
// });

// function fetchReviewsForProduct(productId) {
//   return async function(dispatch) {
//     dispatch(isFetchingReviewsForProduct());
//     try {
//       let response = await fetch(`${current_url}/reviews/${productId}/`, {
//         method: "GET",
//         credentials: "include",
//         mode: "cors",
//         headers: {"application/json",
     // "Content-Type": "application/json",}
//       });
//       if (!response.ok) {
//         throw new Error("Unable to fetch the reviews for this product.");
//       }
//       let responseJson = await response.json();
//       return dispatch(fetchReviewsForProductSuccess(responseJson));
//     } catch (err) {
//       return dispatch(fetchReviewsForProductFailure(err));
//     }
//   };
// }

// const isCreatingReviewForProduct = () => ({
//   type: types.IS_CREATING_REVIEW_FOR_PRODUCT
// });

// const createReviewForProductSuccess = data => ({
//   type: types.CREATE_REVIEW_FOR_PRODUCT_SUCCESS,
//   data
// });

// const createReviewForProductFailure = err => ({
//   type: types.CREATE_REVIEW_FOR_PRODUCT_FAILURE,
//   err
// });
// function createReviewForProduct(product, value, comment_text) {
//   return async function(dispatch) {
//     dispatch(isCreatingReviewForProduct());
//     try {
//       let response = await fetch(`${current_url}/reviews/${product}/`, {
//         method: "POST",
//         credentials: "include",
//         mode: "cors",
//         headers: determineHeaders(),
//         body: JSON.stringify({ product, value, comment_text })
//       });
//       if (!response.ok) {
//         throw new Error("Unable to create the review for this product.");
//       }
//       let responseJson = await response.json();
//       return dispatch(createReviewForProductSuccess(responseJson));
//     } catch (err) {
//       return dispatch(createReviewForProductFailure(err));
//     }
//   };
// }

// export { fetchReviewsForProduct, createReviewForProduct };


export function createReviewForProduct(model) {
  console.log(model);
  
  return function(dispatch){
   var id=null
    var userId=getUserProfile();
    userId(response=>{
      console.log(response);
      id= response.payload.pk
    })
setTimeout(() => {
  console.log(id);
  
  axios.post('http://localhost:8000/api/reviews/'+ model.product+'/?token='+ localStorage.getItem('token'), {product:model.product,user:id, value:model.rating, comment_text:model.comment} ).then(response=>{
    console.log({reviews:response.data});
  })

  setTimeout(() => {
    getReviewForProduct(model.product)

  }, 300);
}, 700);
  
  }
}

export function getReviewForProduct(productId) {  
  return function(dispatch){
    axios.get('http://localhost:8000/api/reviews/'+ productId+'/?token='+ localStorage.getItem('token')).then(response=>{
      console.log({reviews:response.data});
      dispatch({type:REVIEWSLIST,reviewsList:response.data})
    })
  }
}