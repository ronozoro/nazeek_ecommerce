
export const FETCH_WISHLIST_ITEM_COUNT_SUCCESS="FETCH_WISHLIST_ITEM_COUNT_SUCCESS"
export const FETCH_WISHLIST_ITEM_COUNT_FAILURE="FETCH_WISHLIST_ITEM_COUNT_FAILURE"
import current_url from "../determineUrl";
import { determineHeaders } from "../determineUrl";
import axios from 'axios' 
const fetchWishlistItemCountSuccess = (data) => ({
  type: FETCH_WISHLIST_ITEM_COUNT_SUCCESS,
  data
});

const fetchWishlistItemCountFailure = err => ({
  type: FETCH_WISHLIST_ITEM_COUNT_FAILURE,
  err
});
export function fetchWishlistItemCount(){
  return function (dispatch){
   return axios.get('http://localhost:8000/wishlistitemcount/?token='+ localStorage.getItem('token'),{ credentials: "include",
   mode: "cors",
   headers: determineHeaders()
 }).then(response=>{
   console.log({wis:response});
   
 })
  }
}


// function fetchWishlistItemCount() {
//   return async function(dispatch) {
//     try {
//       let response = await fetch(`${current_url}/wishlistitemcount/?token=jvdwjvpwdvpwdvjwdmvow`, {
//         method: "GET",
//         credentials: "include",
//         mode: "cors",
//         headers: determineHeaders()
//       });
//       if (!response.ok) {
//         throw new Error("Unable to fetch wishlist item count");
//       }
//       let responseJson = await response.json();
//       return dispatch(fetchWishlistItemCountSuccess(responseJson));
//     } catch (err) {
//       return dispatch(fetchWishlistItemCountFailure(err));
//     }
//   };
// }

// export { fetchWishlistItemCount };
