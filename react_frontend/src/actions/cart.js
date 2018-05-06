
import axios from 'axios'
import { cartTypes } from '../constants/actionTypes'
import { CartUrls } from '../constants/urls'

function creatCart() {
    console.log("creat ");
    axios.get(CartUrls.cart, {}).then(response => {
        localStorage.setItem('cart_token', response.data.token)
    }).catch((error) => {
    });
}

function checkItemsOfCart(items, id, varId) {
    var found=0;
    if (items && items.length) {
        for(var i=0;i<items.length;i++){
            if(items[i].product===id){
                if(items[i].item===varId){
                    var qun = (items[i].quantity + 1)
                  addItem(varId, qun)
                  found=1
                  console.log(found);

                }               
            }          
        }
        if(found===0){
            console.log("jjkhjhjkjhj");
                        
            addItem(varId, 1)

        }
        // items.map(item => {
        //         if (item&&item.product === id && item.item === varId) {
        //             console.log("productFound");                    
        //                 console.log("equal");                        
        //                 var qun = (item.quantity + 1)
        //                 addItem(varId, qun)
        //         }
              
        // })
       
        //     console.log("color not found");                    
        //     addItem(varId, 1)
        
    }
    else {
        console.log("empty cart");
        addItem(varId, 1)
    }
}
function addItem(varId, count) {
    console.log("add");
    var cart_user_token;
    if(localStorage.getItem('token')){
        cart_user_token=localStorage.getItem('token')
    }
    else
    cart_user_token=""
    return axios.get(CartUrls.cart+'?token="' + localStorage.getItem('cart_token') + '&item=' + varId + '&qty=' + count + '&cart_user_token='+cart_user_token +'')
        .then(response => {
            console.log(response.data);
            dispatch({
                type: cartTypes.SET_TO_CART,
                items: response.data.items,
                count: response.count,                
            })
        }).catch((error) => {
        });

}
export function setToCart(product) {
    console.log(product.prod, product.varId)
    return function (dispatch) {
        if (localStorage.getItem("cart_token") === null) {
            creatCart();
        }
        var items = getItemsOfCart()
        items(response => {
            console.log({itemsofCart:response});
            
            checkItemsOfCart(response.items, product.prod.object.id, product.varId.id)
        })
        setTimeout(() => {
            var newItems = getItemsOfCart()
            newItems(response => {
                    console.log({newItems:response});
                dispatch({
                    type: cartTypes.SET_TO_CART,
                    items: response.items,
                    count: response.count,
                    //product: product.prod,
                    //variation: product.varId
                })
            })
        }, 400);
       
    };
}

export function changeQuantity(data) {

    console.log(data.quantity, data.id, data.prodId);
    return function (dispatch) {
        var items = getItemsOfCart()
        items(response => {
            if (response.items && response.items.length) {
                response.items.map(item => {
                    if (item) {
                        if (item.product == data.prodId) {
                            if (item.item == data.id) {
                                var qun = data.quantity
                                addItem(data.id, qun)
                            }
                        }
                    }
                })
            }
        })
        setTimeout(() => {

            var newItems = getItemsOfCart()
            newItems(response => {
                console.log({changeQuantity:response});
                dispatch({
                    type: cartTypes.SET_TO_CART,
                    items: response.items,
                    count: response.count,
                })
    
            })
    
        }, 300);
      
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
    return function (dispatch) {
        return axios.get(CartUrls.cart+'?token="' + localStorage.getItem('cart_token'))
            .then(response => {
                  dispatch({
                    type: cartTypes.CARTITEMS,
                    items: response.data.items,
                     count: response.data.count,

                })
                return response
            })
    }
}