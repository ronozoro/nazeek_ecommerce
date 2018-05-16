
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

function checkItemsOfCart(items, id, varId, count) {
    console.log(count,items,id,varId);
return function(dispatch){
    var found = 0;
    if (items && items.length) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].product === id) {
                console.log('equalproduct');
                
                if (items[i].item === varId) {
                    var qun = (items[i].quantity + count)
                    found = 1
                    dispatch(addItem(varId, qun))

                    console.log(found);

                }
            }
        }
        if (found === 0) {
            console.log("found:0");
            console.log(count);

            dispatch(addItem(varId, count))

        }
    }
    else {
        console.log("empty cart");
        dispatch(addItem(varId, count))
    }
}
}
function addItem(varId, count) {
    return function (dispatch){
    console.log("add");
    var cart_user_token;
    if (localStorage.getItem('token')) {
        cart_user_token = localStorage.getItem('token')
    }
    else
        cart_user_token = ""
    return axios.get(CartUrls.cart + '?token="' + localStorage.getItem('cart_token') + '&item=' + varId + '&qty=' + count + '&cart_user_token=' + cart_user_token + '')
        .then(response => {
            console.log({add:response.data});
            setTimeout(() => {
                var newItems = getItemsOfCart()
                newItems(response => {

                    console.log({ newItemsafteradd: response });
                    dispatch({
                        type: cartTypes.SET_TO_CART,
                        items: response.items,
                        count: response.count,
                        //product: product.prod,
                        //variation: product.varId
                    })
                })
            }, 200);
            return response
        })



        .catch((error) => {
            console.log(error);
alert(error)
        });
    }
}
export function setToCart(product) {
    console.log(product.prod, product.varId)
    return function (dispatch) {
        if (localStorage.getItem("cart_token") === null) {
            creatCart();
        }
        var items = getItemsOfCart()
        items(response => {
            console.log({ itemsofCart: response });
            if (product.count) {
                console.log("withcount");

                dispatch(checkItemsOfCart(response.items, product.prod.object.id, product.varId.id, product.count))
            } else {
                console.log('withoutcount');

                dispatch(checkItemsOfCart(response.items, product.prod.object.id, product.varId.id, 1))
            }
        })
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
                                dispatch(addItem(data.id, qun))
                            }
                        }
                    }
                })
            }
        })
        setTimeout(() => {

            var newItems = getItemsOfCart()
            newItems(response => {
                console.log({ changeQuantity: response });
                dispatch({
                    type: cartTypes.SET_TO_CART,
                    items: response.items,
                    count: response.count,
                })

            })

        }, 2000);

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
        if(localStorage.getItem('cart_token'))
        return axios.get(CartUrls.cart + '?token="' + localStorage.getItem('cart_token'))

            .then(response => {
                console.log({ newItemsafteradd3: response });

                dispatch({
                    type: cartTypes.CARTITEMS,
                    items: response.data.items,
                    count: response.data.count,

                })
                return response
            })
    }
}