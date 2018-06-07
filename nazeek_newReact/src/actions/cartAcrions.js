/* global localStorage, alert */
import axios from 'axios'
import { CartUrls } from '../constant/urls'

export const creatCart = () => (dispatch) => {
  return axios.get(CartUrls.cart, {})
    .then((result) => {
      localStorage.setItem('cart_token', result.data.token)
    })
}

export const getItemsOfCart = () => (dispatch) => {
  if (localStorage.getItem('cart_token') !== null) {
    axios.get(CartUrls.cart + '?token="' + localStorage.getItem('cart_token'), {})
      .then((result) => {
        dispatch({
          type: 'GET_ITEMS_OF_CART_SUCCESS',
          payload: result.data.items
        })
      })
      .catch(() => {
        dispatch({
          type: 'GET_ITEMS_OF_CART_FAIL'
        })
      })
  } else {
    const cart = creatCart()
    cart()
      .then(() => {
        axios.get(CartUrls.cart + '?token="' + localStorage.getItem('cart_token'), {})
          .then((result) => {
            dispatch({
              type: 'GET_ITEMS_OF_CART_SUCCESS'
            })
          })
          .catch(() => {
            dispatch({
              type: 'GET_ITEMS_OF_CART_FAIL'
            })
          })
      })
  }
}

export const addItemToCart = (varId, count) => (dispatch) => {
  return axios.get(CartUrls.cart + '?token=' + localStorage.getItem('cart_token') + '&item=' + varId)
    .then(response => {
      console.log({add: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
}
