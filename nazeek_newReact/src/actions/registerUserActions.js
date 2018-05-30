/* global fetch */

import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'
import handleError from '../helper/handleErrors'

const registerUserStart = () => {
  return {
    type: REGISTER_USER_START
  }
}

const registerUserSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user
  }
}

const registerUserFail = (err) => {
  return {
    type: REGISTER_USER_FAIL,
    payload: err
  }
}

export const registerUser = (data) => (dispatch) => {
  dispatch(registerUserStart())

  fetch(AuthUrls.SIGNUP, {
    method: 'POST',
    body: data
  })
    .then(handleError)
    .then((result) => dispatch(registerUserSuccess(result)))
    .catch((err) => dispatch(registerUserFail(err)))
}
