import {
  FETCH_DUMMY_PAGES_START,
  FETCH_DUMMY_PAGES_SUCCESS,
  FETCH_DUMMY_PAGES_FAIL
} from '../constant/actionsType'

const initialState = {
  isFetching: false,
  pages: [],
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_DUMMY_PAGES_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_DUMMY_PAGES_SUCCESS:
      return {
        ...state,
        pages: payload,
        isFetching: false
      }
    case FETCH_DUMMY_PAGES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}
