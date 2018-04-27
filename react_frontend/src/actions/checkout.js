
import { CartUrls } from "../constants/urls";
import axios from 'axios'
import history from "../utils/historyUtils";
import {AuthUrls} from '../constants/urls'
import {getUserProfile} from '../actions/authActions'
function getUserCheckOutToken() {
    console.log("get");
    
    axios.get(CartUrls.checkout, {}).then(response => {
        console.log({get:response});        
        localStorage.setItem('user_checkout_token', response.data.token)
    }).catch((error) => {
    });
}
function setUserCheckoutToken() {
    console.log("set");
   return axios.post('http://127.0.0.1:8000/api/user/checkout/', data = {"email": 'wessammohamed33@yahoo.com' })
    .then(response => {
        console.log({set:response});        
        localStorage.setItem('user_checkout_token', response.data.token)
    }).catch((error) => {
    });
}
function creatAdress() {
    axios.post(CartUrls.creatAdress, {}).then(response => {
        console.log(response);        
        //localStorage.setItem('user_checkout_token', response.data.token)
    }).catch((error) => {
    });
}
export function checkout(){
    return function(dispatch){
        if(localStorage.getItem("token")===null){
            history.push("/login")
        }
        var user=getUserProfile();        
        user(response=>{
            console.log(response.payload.email);
            

    axios.post('http://127.0.0.1:8000/api/user/checkout/', data = {"email": 'wessammohamed33@yahoo.com' })
    .then(response => {
        console.log({set:response});        
        localStorage.setItem('user_checkout_token', response.data.token)
    }).catch((error) => {
    });
            //getUserCheckOutToken()
        })
   history.push("/checkout")

    }
}
// export function getUserProfile(){
//     const token=localStorage.getItem("token")
//    return axios.get(AuthUrls.USER_PROFILE, {
//         headers: {
//             authorization: 'Token ' + token
//         }
//     }).then(response => {
//         console.log(response.data.email);           
//          return response
//     })

// }
