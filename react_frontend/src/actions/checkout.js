export const CHECKOUT_ADDRESS="CHECKOUT_ADDRESS"
export const OPEN="OPEN"
export const CLOSE="CLOSE"
import { CartUrls } from "../constants/urls";
import axios from 'axios'
import history from "../utils/historyUtils";
import {AuthUrls} from '../constants/urls'
import {getUserProfile} from '../actions/authActions'
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
   return axios.post('http://127.0.0.1:8000/api/user/checkout/',  {"email": email })
    .then(response => {
        console.log({set:response});        
        localStorage.setItem('user_checkout_token', response.data.user_checkout_token)
        return response.data
    }).catch((error) => {
    });
}
export function getAddress() {
    return function(){
   return axios.get('http://127.0.0.1:8000/api/user/address/?checkout_token="' + localStorage.getItem('user_checkout_token')+`"`, {}).then(response => {
        console.log(response);   
        return response.data     
        //localStorage.setItem('user_checkout_token', response.data.token)
    }).catch((error) => {
    });
}
}
export function checkout(){
    console.log(localStorage.getItem("user_checkout_token"))
    return function(dispatch){
        if(localStorage.getItem("token")===null){
            history.push("/login")
        }
        var user=getUserProfile();        
        user(response=>{
            console.log(response.payload.email);
           setUserCheckoutToken(response.payload.email)
        })
        // var getcheckoutToken=getUserCheckOutToken();
        setTimeout(() => {
            var getAdd = getAddress()
            getAdd(response=>{
                console.log({add:response});
                dispatch({ 
                    type:CHECKOUT_ADDRESS,
                    addresses:response
                })
            })      
        }, 200);
       
   history.push("/checkout")

    }
}
export function open(){
    return function(dispatch){
        dispatch({
            type:OPEN
        })
    }
}
export function close(){
    return function(dispatch){
        dispatch({
            type:CLOSE
        })
    }
}