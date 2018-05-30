import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import productsReducer from './productsReducer'
import filterdProductsReducer from './filteredProductsReducer'

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  filterdProducts: filterdProductsReducer
})

export default rootReducer
