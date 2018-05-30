import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../constant/actionsType'

const initialState = {
  isFetching: false,
  products: [],
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isFetching: false
      }
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}
