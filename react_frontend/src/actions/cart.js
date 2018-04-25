
import axios from 'axios'
import { cartTypes } from '../constants/actionTypes'
import { CartUrls } from '../constants/urls'

var count = 0,items
function creatCart(){
    console.log("creat ");
    axios.get('http://127.0.0.1:8000/api/cart/', {}).then(response => {
        localStorage.setItem('cart_token', response.data.token)
    }).catch((error) => {
    });
}
function checkItemsOfCart(items,id,varId){
    if (items && items.length) {   
         items.map(item=>{
            if(item){
             if(item.product==id)
             {
              var qun=item.quantity+1
               addItem(varId,qun)
            }
            }
            else{
                addItem(varId,1)
            }
         })
     }
      else {
        addItem(varId,1)
     }
}
function addItem(varId,count){
    console.log("add");
    return axios.get('http://127.0.0.1:8000/api/cart/?token="' + localStorage.getItem('cart_token') + '&item=' + varId + '&qty='+count+'')
    .then(response => {
        console.log(resonse);
        
    }).catch((error) => {
    });
    
}
export function setToCart(product) {
    console.log(product.prod,product.varId)
    return function (dispatch) {
        if (localStorage.getItem("cart_token") === null) {
          creatCart();
        }
   var items=getItemsOfCart()
   items(response=>{
       checkItemsOfCart(response.items,product.prod.object.id,product.varId.id)
   })
   var newItems=getItemsOfCart()
   newItems(response=>{
    //    console.log(response);
         dispatch({
            type: cartTypes.SET_TO_CART,
            items: response.items,
             count: response.count,
             product:product.prod,
             variation:product.varId
        })
   })
    };
}

export function changeQuantity(data){

    console.log(data.quantity,data.id);
    return function (dispatch){
        var items=getItemsOfCart()
        items(response=>{
            if (response.items && response.items.length) {   
                response.items.map(item=>{
                   if(item){
                    if(item.item==data.id)
                    {
                     var qun=data.quantity
                      addItem(data.id,qun)
                   }
                   }
                })
            }
        })
        var newItems =getItemsOfCart()
        newItems(response=>{
            console.log(response);
            
        })

        // axios.get('http://127.0.0.1:8000/api/cart/?token="' + localStorage.getItem('cart_token'))
        // .then(response =>{
        //     console.log({respons:response.data});
        //     items=response.data.items
        //     if (items && items.length) {   
        //          items.map(item=>{
        //             if(item){
        //              if(item.item==data.id)
        //              {
        //                  var qun=data.quantity
        //                 axios.get('http://127.0.0.1:8000/api/cart/?token="' + localStorage.getItem('cart_token') + '&item=' + data.id +'&qty='+qun+'')
        //                 .then(response => {
        //                     console.log(response.data)
        //                     dispatch({
        //                         type: cartTypes.SET_TO_CART,
        //                         items: response.data.items,
        //                          count: response.data.count,
                                
        //                     })
        //                 })
        //             }
        //             }
        //         })
            //}
            
        //})  
        // var  xx= getItemsOfCart() 
         
        // xx(response=>{
        //     console.log(response);
        // }
        // )
              
    }

}
 export function getItemsOfCart() {  
     return function (dispatch){ 
     axios.get('http://127.0.0.1:8000/api/cart/?token="' + localStorage.getItem('cart_token'))
    .then(response =>{
        console.log({itemsofcart:response.data});
          dispatch({
            type: cartTypes.CARTITEMS,
            items: response.data.items,
             count: response.data.count,
            
        })
        return response
    })
}
 }