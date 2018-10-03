import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductList from './ProductsList'
import * as productActions from '../actions/productActions'

class ProductListContainer extends Component {
  constructor (props, context) {
    super(props, context)
  }

  async componentWillMount () {
    try {
      await this.props.productActions.fetchProducts()
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <ProductList
        loading={this.props.loading}
        products={this.props.products}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.productList.products,
    loading: state.productList.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    loading: bindActionCreators(productActions, dispatch)
  }
}

ProductListContainer.defaultProps = {
  products: []
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
