/* global fetch */

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'
import handleError from '../helper/handleErrors'

const fetchProductsStart = () => {
  return {
    type: FETCH_PRODUCTS_START
  }
}

const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

const fetchProductsFail = (err) => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: err
  }
}

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsStart())

  fetch(ShopUrls.PRODUCTS)
    .then(handleError)
    .then((result) => dispatch(fetchProductsSuccess(result)))
    .catch((err) => dispatch(fetchProductsFail(err)))
}
