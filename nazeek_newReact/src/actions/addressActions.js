import axios from 'axios'
import { CartUrls } from '../constant/urls'

export const createAddress = (value) => (dispatch) => {
  axios.post(CartUrls.creatAdress, value)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
}

export const getAdresses = () => (dispatch) => {
  dispatch({
    type: 'GET_ADDRESS_START'
  })

  axios.get(CartUrls.getAdress, {})
    .then((res) => {
      dispatch({
        type: 'GET_ADDRESS_SUCCESS',
        payload: res.data
      })
    }).catch((err) => {
      console.log(err)
      dispatch({
        type: 'GET_ADDRESS_FAIL'
      })
    })
}
