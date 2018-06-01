import axios from 'axios'
import {
  FILTER_PRODUCTS_START,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'

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

  axios(ShopUrls.PRODUCTS + '/?ordering=' + order, {})
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }

      dispatch(filterProductsSuccess(result.data))
    })
    .catch((err) => dispatch(filterProductsFail(err)))
}
