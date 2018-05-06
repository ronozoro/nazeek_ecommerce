export const REVIEWSLIST="REVIEWSLIST"
import current_url from "../determineUrl";
import {getuserId} from './checkout'
import { determineHeaders } from "../determineUrl";
import axios from 'axios'
import { getUserProfile } from './authActions';
import {ReviewsUrl} from '../constants/urls'


export function createReviewForProduct(model) {
  console.log(model);
  
  return function(dispatch){
   var id=null
    var userId=getUserProfile();
    userId(response=>{
      console.log(response);
      id= response.payload.pk
    })
setTimeout(() => {
  console.log(id);
  
  axios.post(ReviewsUrl.createReview+ model.product+'/?token='+ localStorage.getItem('token'), {product:model.product,user:id, value:model.rating, comment_text:model.comment} ).then(response=>{
    console.log({reviews:response.data});
  })

  setTimeout(() => {
    getReviewForProduct(model.product)

  }, 300);
}, 700);
  
  }
}

export function getReviewForProduct(productId) {  
  return function(dispatch){
    axios.get(ReviewsUrl.createReview+ productId+'/?token='+ localStorage.getItem('token')).then(response=>{
      console.log({reviews:response.data});
      dispatch({type:REVIEWSLIST,reviewsList:response.data})
    })
  }
}