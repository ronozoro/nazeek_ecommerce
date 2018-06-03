import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { loadState, saveState } from './localStorage'
import rootReducer from '../reducers'

const logger = createLogger()

const persistedState = loadState()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, persistedState, composeEnhancers(
  applyMiddleware(thunk, logger)
))

store.dispatch({
  type: 'RESET_ERRORS'
})

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  })
})

export default store
