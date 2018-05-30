/* global fetch */

import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'
import handleError from '../helper/handleErrors'

const loginUserStart = () => {
  return {
    type: LOGIN_USER_START
  }
}

const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
}

const loginUserFail = (err) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: err
  }
}

export const loginUser = (data) => (dispatch) => {
  dispatch(loginUserStart())

  fetch(AuthUrls.SIGNUP, {
    method: 'POST',
    body: data
  })
    .then(handleError)
    .then((result) => dispatch(loginUserSuccess(result)))
    .catch((err) => dispatch(loginUserFail(err)))
}
