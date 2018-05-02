import  types from "../constants/actionTypes";
import current_url from "../determineUrl";
import { determineHeaders } from "../determineUrl";
import axios from 'axios'

//  http://localhost:8000/api/wishlistitems/?token=a8f50116fc18fe49090c5fc81b348749de68a392
//delet   http://localhost:8000/api/wishlist/1/wishlistitems/3/?token=a8f50116fc18fe49090c5fc81b348749de68a392
//count http://localhost:8000/api/wishlistitemcount/?token=a8f50116fc18fe49090c5fc81b348749de68a392
// add http://localhost:8000/api/wishlistitems/?token=a8f50116fc18fe49090c5fc81b348749de68a392
//get wishlistItems and id
export function creatwishList(){
console.log("creatwish");
  return function(dispatch){
    if (localStorage.getItem("token") === null) {
       history.push("/login")
  }
   return axios.get('http://localhost:8000/api/wishlist/?token='+localStorage.getItem("token")).then(response=>{
    console.log(response);
    return response
  })
  }
}
export function addToWishList(product){
  console.log("addwishlist");
    return function(dispatch){
      if (localStorage.getItem("token") === null) {
         history.push("/login")
    }
     var wishlist= creatwishList();
     wishlist(response=>{
       console.log(response);
       
     })
      setTimeout(() => {
        axios.post('http://localhost:8000/api/wishlistitems/?token='+localStorage.getItem("token"),
        {
          "wishlist": 2,
          "product": product.id,
          "quantity": 1
      }).then(response=>{
        console.log(response);
      })
      }, 200);
    
    }
  }

export function fetchWishlistItemCount(){
  console.log("wishcount");
  return function (dispatch){
    axios.get('http://localhost:8000/api/wishlistitemcount/?token='+ localStorage.getItem('token')).then(response=>{
   console.log({wis:response});
 })
  }
}

export function deleteWishlistItem(){
  console.log("delete");
  return function (dispatch){
    axios.get('http://localhost:8000/api/wishlist/'+ wishlistId +'/wishlistitems/'+itemId+'/?token='+ localStorage.getItem('token')).then(response=>{
   console.log({wis:response});
   dispatch({type:GETCOUNT})
 })
  }
}




// const isFetchingWishListAndItems = () => ({
//   type: types.IS_FETCHING_WISHLIST_AND_ITEMS
// });

// const fetchWishlistAndItemsSuccess = data => ({
//   type: types.FETCH_WISHLIST_AND_ITEMS_SUCCESS,
//   data
// });

// const fetchWishlistAndItemsFailure = err => ({
//   type: types.FETCH_WISHLIST_AND_ITEMS_FAILURE,
//   err
// });

// function fetchWishlistAndItems() {
//   console.log("jkfglkfgjlkgjldfkjgldfkjglkdfjg");
  
//   return async function(dispatch) {
//     dispatch(isFetchingWishListAndItems());
//     try {
//       let response = await fetch(`${current_url}/api/wishlist/`, {
//         method: "GET",
//         credentials: "include",
//         mode: "cors"
//         // headers: determineHeaders()
//       });
//       if (!response.ok) {
//         throw new Error("Unable to fetch wishlist and items");
//       }
//       let responseJson = await response.json();
//       return dispatch(fetchWishlistAndItemsSuccess(responseJson));
//     } catch (err) {
//       return dispatch(fetchWishlistAndItemsFailure(err));
//     }
//   };
// }

//export { fetchWishlistAndItems };
