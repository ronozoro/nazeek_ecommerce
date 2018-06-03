import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL
} from '../constant/actionsType'

const initialState = {
  isFetching: false,
  categories: [],
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isFetching: false
      }
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}
