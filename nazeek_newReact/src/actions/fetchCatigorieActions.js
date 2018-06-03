import axios from 'axios'
import {
  FETCH_CATEGORIE_START,
  FETCH_CATEGORIE_SUCCESS,
  FETCH_CATEGORIE_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'

const fetchCategotieStart = () => {
  return {
    type: FETCH_CATEGORIE_START
  }
}

const fetchCategotieSuccess = (product) => {
  return {
    type: FETCH_CATEGORIE_SUCCESS,
    payload: product
  }
}

const fetchCategotieFail = (err) => {
  return {
    type: FETCH_CATEGORIE_FAIL,
    payload: err
  }
}

export const fetchCategotie = (id) => (dispatch) => {
  dispatch(fetchCategotieStart())

  axios.get(ShopUrls.CATEGORIES + '/' + id, {})
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }
      console.log(result)

      dispatch(fetchCategotieSuccess(result.data))
    })
    .catch((err) => dispatch(fetchCategotieFail(err)))
}
