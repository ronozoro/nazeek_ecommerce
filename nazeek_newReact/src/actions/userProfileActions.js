import axios from 'axios'
import {
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'

const getUserProfileStart = () => {
  return {
    type: GET_USER_PROFILE_START
  }
}

const getUserProfileSuccess = (token) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: token
  }
}

const getUserProfileFail = (err) => {
  return {
    type: GET_USER_PROFILE_FAIL,
    payload: err
  }
}
export const getUserProfile = (token) => (dispatch) => {
  dispatch(getUserProfileStart())
  if (token) {
    return axios.get(AuthUrls.USER_PROFILE, {
      headers: {
        authorization: 'Token ' + token
      }
    }).then(response => {
      dispatch(getUserProfileSuccess(response.data))
    }).catch((error) => {
      dispatch(getUserProfileFail(error))
    })
  }
}
