import axios from 'axios'
import {
  // FETCH_DUMMY_PAGES_START,
  FETCH_DUMMY_PAGES_SUCCESS,
  FETCH_DUMMY_PAGES_FAIL
} from '../constant/actionsType'

export const getDummyPages = () => (dispatch) => {
  axios.get('http://209.97.132.19:8000/api/dummy/', {})
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCH_DUMMY_PAGES_SUCCESS,
        payload: result.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
