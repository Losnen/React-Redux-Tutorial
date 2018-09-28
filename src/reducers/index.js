import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import productList from './productListReducer'
import activeProduct from './activeProductReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
  routing,
  productList,
  activeProduct,
  cart
})

export default rootReducer
