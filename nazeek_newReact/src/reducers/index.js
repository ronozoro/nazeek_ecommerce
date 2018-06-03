import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import productsReducer from './productsReducer'
import productReducer from './productReducer'
import filterdProductsReducer from './filteredProductsReducer'
import authReducer from './authReducer'
import wishlistReducer from './wishListReducer'

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  product: productReducer,
  filterdProducts: filterdProductsReducer,
  auth: authReducer,
  wishlist: wishlistReducer
})

export default rootReducer
