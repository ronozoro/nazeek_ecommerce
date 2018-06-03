/* global localStorage */
import axios from 'axios'
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'
import history from '../utils/historyUtils'

const loginUserSuccess = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: token
  }
}

const loginUserFail = (err) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: err
  }
}

export const loginUser = (data) => (dispatch) => {
  return axios.post(AuthUrls.LOGIN, data)
    .then((result) => {
      const token = result.data.key

      dispatch(loginUserSuccess(token))
      localStorage.setItem('token', token)
    })
    .catch((error) => {
      dispatch(loginUserFail(error.response.data))
    })
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch({
    type: LOGOUT_USER
  })
}

export const activateUserAccount = (data, Null, props) => (dispatch) => {
  const { key } = props.match.params
  const activateUserUrl = AuthUrls.USER_ACTIVATION
  const formValues = Object.assign(data, { key })

  return axios.post(activateUserUrl, formValues)
    .then(response => {
      dispatch({
        type: 'ACTIVATE_SUCCESS'
      })

      history.push('/login')
    }).catch((error) => {
      dispatch({
        type: 'ACIVATE_FAIL',
        payload: error
      })
    })
}
