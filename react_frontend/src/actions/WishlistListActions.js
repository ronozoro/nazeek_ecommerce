export const GETCOUNT ="GETCOUNT"
export const GETITEMS ="GETITEMS"
export const GETwISHLISTID="GETwISHLISTID"
export const DELETE ="DELETE"
import { wishListUrl } from '../constants/urls'
import history from "../utils/historyUtils";

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
   return axios.get(wishListUrl.createList+'?token='+localStorage.getItem("token")).then(response=>{
    console.log(response.data);
    dispatch({type:GETwISHLISTID,id:response.data.whishlist_id})
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
          axios.post(wishListUrl.addtoList+'?token='+localStorage.getItem("token"),
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
 setTimeout(() => {
  var count= fetchWishlistItemCount()
  count(res=>{
console.log(res);
dispatch({type:GETCOUNT,count:res.count})

})
 }, 300);
    
      }, 2000);
  }
}

 export function getWishListItems(){
  return function(dispatch){
    return axios.get(wishListUrl.getItems+'?token='+localStorage.getItem("token")).then(response=>{
    console.log(response.data);
    dispatch({type:GETITEMS,items:response.data})
    return response.data
  })
  }
}
export function fetchWishlistItemCount(){
  console.log("wishcount");
  return function (dispatch){
   return axios.get(wishListUrl.getCount+'?token='+ localStorage.getItem('token')).then(response=>{
   console.log({wisCount:response.data.item_count});
   dispatch({type:GETCOUNT,count:response.data.item_count})
   return response.data
 })
  }
}

export function deleteWishlistItem(item){
  console.log("delete");
  return function (dispatch){
    axios.delete(wishListUrl.deleteItem+ item.wishlist +'/wishlistitems/'+item.id+'/?token='+ localStorage.getItem('token')).then(response=>{
  console.log({del:response});
  dispatch({type:DELETE,item:response.data})
    })

    setTimeout(() => {
      var items=getWishListItems()
      items(response=>{
        dispatch({type:GETITEMS,items:response.items})

      })
      var count=fetchWishlistItemCount();
      count(res=>{
        console.log(res);        
        dispatch({type:GETCOUNT,count:res.count})

      })
    }, 300);
  }
}

