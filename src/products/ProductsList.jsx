import React, { PropTypes } from 'react'
import uuid from 'uuid'

import Product from './Product'

const ProductList = ({ loading, products, onAddItem }) => (
  <section className='container'>
    <div className='row'>
      {
        products.map(product => (
          <Product
            key={uuid.v4()}
            onAddItem={onAddItem}
            {...product}
          />
        ))
      }
    </div>
  </section>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func.isRequired
}

export default ProductList
