import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ProductList from './products/ProductsList'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProductList} />
  </Route>
)
