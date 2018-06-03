import axios from 'axios'
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'

const registerUserSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS
  }
}

const registerUserFail = (err) => {
  return {
    type: REGISTER_USER_FAIL,
    payload: err
  }
}

export const registerUser = (data) => (dispatch) => {
  axios.post(AuthUrls.SIGNUP, data)
    .then((result) => {
      dispatch(registerUserSuccess())
    })
    .catch((err) => {
      dispatch(registerUserFail(err.response.data))
    })
}
