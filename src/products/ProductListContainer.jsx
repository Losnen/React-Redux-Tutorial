import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductList from './ProductsList'
import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'

class ProductListContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }

  async componentWillMount () {
    try {
      await this.props.productActions.fetchProducts()
    } catch (error) {
      console.error(error)
    }
  }

  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item)
  }

  render () {
    return (
      <ProductList
        loading={this.props.loading}
        products={this.props.products}
        onAddItem={this.handleOnAddItem}
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
    cartActions: bindActionCreators(cartActions, dispatch),
    loading: bindActionCreators(productActions, dispatch)
  }
}

ProductListContainer.defaultProps = {
  products: []
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
