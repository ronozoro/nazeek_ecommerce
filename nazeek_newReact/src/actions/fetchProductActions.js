import axios from 'axios'
import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'

const fetchProductStart = () => {
  return {
    type: FETCH_PRODUCT_START
  }
}

const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  }
}

const fetchProductFail = (err) => {
  return {
    type: FETCH_PRODUCT_FAIL,
    payload: err
  }
}

export const fetchProduct = (id) => (dispatch) => {
  dispatch(fetchProductStart())

  axios.get(ShopUrls.PRODUCTS + '/' + id, {})
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }

      dispatch(fetchProductSuccess(result.data))
    })
    .catch((err) => dispatch(fetchProductFail(err)))
}
