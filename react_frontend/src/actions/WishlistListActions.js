export const GETCOUNT ="GETCOUNT"
export const GETITEMS ="GETITEMS"
export const GETwISHLISTID="GETwISHLISTID"
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
  //get id,userId,itemList
   return axios.get('http://localhost:8000/api/wishlist/?token='+localStorage.getItem("token")).then(response=>{
    console.log(response.data);
    dispatch({type:GETwISHLISTID,id:response.data.id})
    return response.data
  })
  }
}
export function addToWishList(product){
  console.log(product);
      return function(dispatch){
      if (localStorage.getItem("token") === null) {
         history.push("/login")
    }
    var wishListId=null,isFound=false
     var wishlist= creatwishList();
     wishlist(response=>{
       console.log({res:response});
       wishListId=response.id
     })

    var items=getWishListItems()
    items(response=>{
      console.log({items:response});
      response.items.map(item=>{        
        if(product.object.id==item.product){
          console.log(item,product.object.id);
          
          isFound=true
        }
      })
    
    })

      setTimeout(() => {  
        console.log(isFound);
          
        if(isFound===false)    
       {
          axios.post('http://localhost:8000/api/wishlistitems/?token='+localStorage.getItem("token"),
        {
          "wishlist":wishListId ,
          "product": product.object.id,
          "quantity": 1
      }).then(response=>{
        console.log(response);
      })
    }
    else{
      alert(" the product in wishList")
    }
      }, 2000);
  }
}

 export function getWishListItems(){
  return function(dispatch){
    return axios.get('http://localhost:8000/api/wishlistitems/?token='+localStorage.getItem("token")).then(response=>{
    console.log(response.data);
    dispatch({type:GETITEMS,items:response.data})
    return response.data
  })
  }
}
export function fetchWishlistItemCount(){
  console.log("wishcount");
  return function (dispatch){
   return axios.get('http://localhost:8000/api/wishlistitemcount/?token='+ localStorage.getItem('token')).then(response=>{
   console.log({wisCount:response.data.item_count});
   dispatch({type:GETCOUNT,count:response.data.item_count})
   return response.data
 })
  }
}

export function deleteWishlistItem(){
  console.log("delete");
  return function (dispatch){
    axios.get('http://localhost:8000/api/wishlist/'+ wishlistId +'/wishlistitems/'+itemId+'/?token='+ localStorage.getItem('token')).then(response=>{
   console.log({wis:response});
  //  dispatch({type:GETCOUNT})
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
