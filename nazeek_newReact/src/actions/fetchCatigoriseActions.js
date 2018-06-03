import axios from 'axios'
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'

const fetchCategotiesStart = () => {
  return {
    type: FETCH_CATEGORIES_START
  }
}

const fetchCategotiesSuccess = (product) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: product
  }
}

const fetchCategotiesFail = (err) => {
  return {
    type: FETCH_CATEGORIES_FAIL,
    payload: err
  }
}

export const fetchCategoties = () => (dispatch) => {
  dispatch(fetchCategotiesStart())

  axios.get(ShopUrls.CATEGORIES, {})
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }

      dispatch(fetchCategotiesSuccess(result.data.results))
    })
    .catch((err) => dispatch(fetchCategotiesFail(err)))
}
