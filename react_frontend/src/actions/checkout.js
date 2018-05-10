export const CHECKOUT_ADDRESS = "CHECKOUT_ADDRESS"
export const OPEN = "OPEN"
export const CLOSE = "CLOSE"
export const USER_ID = "USER_ID"
export const ORDER_TOKEN="ORDER_TOKEN"
export const ADD_ADDRESS = "ADD_ADDRESS"
import { CartUrls } from "../constants/urls";
import axios from 'axios'
import history from "../utils/historyUtils";
import { AuthUrls } from '../constants/urls'
import { getUserProfile } from '../actions/authActions'
import { cartTypes } from "../constants/actionTypes";
// function getUserCheckOutToken() {
//     console.log("get");
//     axios.get(CartUrls.checkout, {}).then(response => {
//         console.log({get:response});        
//         //localStorage.setItem('user_checkout_token', response.data.token)
//     }).catch((error) => {
//     });
// }
function setUserCheckoutToken(email) {
    console.log("set");
    var token = localStorage.getItem('token')
    return axios.post(CartUrls.userCheckout, { "email": email, token: token })
        .then(response => {
            console.log({ set: response });
            localStorage.setItem('user_checkout_token', response.data.user_checkout_token)
            return response.data
        }).catch((error) => {
        });
}
export function getAddress() {
    return function (dispatch) {
        return axios.get( CartUrls.getAdress+'?checkout_token="' + localStorage.getItem('user_checkout_token') + `"`, {}).then(response => {
            console.log(response);
            dispatch({
                type: CHECKOUT_ADDRESS,
                addresses: response.data
            })
            return response.data
            //localStorage.setItem('user_checkout_token', response.data.token)
        }).catch((error) => {
        });
    }
}
export function checkout() {
    return function (dispatch) {
        console.log(localStorage.getItem("token"));
        
        if (localStorage.getItem("token") === null) {
            history.push("/login")
        }
        var user = getUserProfile();
        user(response => {
            console.log(response.payload.email);
            setUserCheckoutToken(response.payload.email)
        })
        // var getcheckoutToken=getUserCheckOutToken();
        var user_id=0, address
        var b_id=0, s_id=0
       
        var userId = getuserId()
        userId(response => {
            console.log("id",response.id);
            dispatch({
                type: USER_ID,
                id: response.id
            })
            
            user_id = response.id
        })

            var getAdd = getAddress()
            getAdd(response => {
                console.log({ add: response });
                address.map(add => {
                    console.log(user_id,"jjjjjj");                    
                    if (add.user === user_id) {
                        if (add.type === "billing")
                            {
                                console.log("wq");
                                b_id = add.id
                            }
                        else
                            s_id = add.id
                    }
                })
                dispatch({ 
                    type:CHECKOUT_ADDRESS,
                    addresses:response.addresses
                })
                address = response.addresses
            })
           
        setTimeout(() => {
            history.push("/checkout")
        }, 1000);

    }
}
export function payNow(checkedBilling,checkedShipping){
var b_id,s_id
b_id=checkedBilling[0].id
s_id=checkedShipping[0].id
      console.log(b_id,s_id);
        if(b_id&&s_id){
        {
            axios.post(CartUrls.checkoutUrl, {
            "billing_address": b_id,
            "shipping_address": s_id,
            "cart_token": localStorage.getItem('cart_token'),
            "checkout_token": localStorage.getItem('user_checkout_token')
        }).then(response => {
            console.log({ order: response });
            dispatch({
                type:ORDER_TOKEN
            })
            //localStorage.setItem('order_token',response.data.order_token)
            localStorage.removeItem('cart_token')
            localStorage.removeItem('user_checkout_token')
        })  

    } 
}
else{
    alert(" you must check address billing and address shiping")
}          

}
export function getuserId() {
    return function (dispatch) {
        return axios.get(CartUrls.userId + '?checkout_token=' + localStorage.getItem('user_checkout_token'))
            .then(response => {
                console.log({ finish: response.data[0].id });
                dispatch({
                    type: USER_ID,
                    id: response.data[0].id
                })
                return response
            })
    }
}
export function addAdress(model) {
    
    console.log(model);
    var userId;
    return function (dispatch) {
 if(localStorage.getItem('user_checkout_token')==null){
    var user = getUserProfile();
    user(response => {
        console.log(response.payload.email);
        setUserCheckoutToken(response.payload.email)
    })

 }
        axios.get(CartUrls.userId + '?checkout_token=' + localStorage.getItem('user_checkout_token'))
            .then(response => {
                console.log({ finish: response.data[0].id });
                userId = response.data[0].id
                dispatch({
                    type: USER_ID,
                    id: response.data[0].id
                })
            })

        setTimeout(() => {
            console.log(userId);
            axios.post(CartUrls.creatAdress, {
                "user": userId,
                "type": model.type,
                "street": model.street,
                "city": model.city,
                "zipcode": "1234"
            }).then(response => {
                console.log({ creat: response.data });
            })
        }, 500);

        //history.push("/checkout")

        setTimeout(() => {
            var getAdd = getAddress()
            getAdd(response=>{
                console.log({add:response});
                dispatch({ 
                    type:CHECKOUT_ADDRESS,
                    addresses:response.addresses
                })
            })      
        }, 800);

    }

}
export function finishCheckout() {
    return function () {
        return axios.post(CartUrls.checkoutUrl, model).then(response => {
            console.log({ finish: response.data });
            return response.data
        })
    }
}
export function creatAddress(model) {
    return function () {
        return axios.post(CartUrls.creatAdress, { model }).then(response => {
            console.log({ creat: response.data });
            return response.data
        })
    }
}
export function open() {
    return function (dispatch) {
        dispatch({
            type: OPEN
        })
        history.push("/AddAddress")
    }
}
export function close() {
    return function (dispatch) {
        dispatch({
            type: CLOSE
        })
    }
}