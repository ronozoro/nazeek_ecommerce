import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL
} from '../constant/actionsType'

const initialState = {
  isFetching: false,
  product: {
    productimage_set: [],
    variation_set: []
  },
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        isFetching: false
      }
    case FETCH_PRODUCT_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}
