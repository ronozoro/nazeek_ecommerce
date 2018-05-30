/* global fetch */

import {
  FILTER_PRODUCTS_START,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'
import handleError from '../helper/handleErrors'

const filterProductsStart = () => {
  return {
    type: FILTER_PRODUCTS_START
  }
}

const filterProductsSuccess = (products) => {
  return {
    type: FILTER_PRODUCTS_SUCCESS,
    payload: products
  }
}

const filterProductsFail = (err) => {
  return {
    type: FILTER_PRODUCTS_FAIL,
    payload: err
  }
}

export const filterProducts = (order) => (dispatch) => {
  dispatch(filterProductsStart())

  fetch(ShopUrls.PRODUCTS + '/?ordering=' + order)
    .then(handleError)
    .then((result) => dispatch(filterProductsSuccess(result)))
    .catch((err) => dispatch(filterProductsFail(err)))
}
