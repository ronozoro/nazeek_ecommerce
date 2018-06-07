const initialState = {
  isFetching: false,
  adresses: [],
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case 'GET_ADDRESS_START':
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case 'GET_ADDRESS_SUCCESS':
      return {
        ...state,
        adresses: payload,
        isFetching: false
      }
    case 'GET_ADDRESS_FAIL':
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    default:
      return state
  }
}
