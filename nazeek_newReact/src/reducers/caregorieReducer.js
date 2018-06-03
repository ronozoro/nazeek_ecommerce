import {
  FETCH_CATEGORIE_START,
  FETCH_CATEGORIE_SUCCESS,
  FETCH_CATEGORIE_FAIL
} from '../constant/actionsType'

const initialState = {
  isFetching: false,
  categorie: {
    product_set: []
  },
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_CATEGORIE_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_CATEGORIE_SUCCESS:
      return {
        ...state,
        categorie: payload,
        isFetching: false
      }
    case FETCH_CATEGORIE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}
