import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import productsReducer from './productsReducer'
import filterdProductsReducer from './filteredProductsReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  filterdProducts: filterdProductsReducer,
  auth: authReducer
})

export default rootReducer
