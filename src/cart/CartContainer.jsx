import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CartItemList from './CartItemList'
import * as cartActions from '../actions/cartActions'

class CartContainer extends Component {
  constructor (props) {
    super(props)

    this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this)
  }

  async componentWillMount () {
    this.props.actions.loadCartItems()
  }

  handleOnRemoveItem (id) {
    this.props.actions.removeCartItem(id)
  }

  render () {
    return (
      <section className='container'>
        <CartItemList
          items={this.props.items}
          onRemoveItem={this.handleOnRemoveItem}
        />
        <hr />
        <div className='row'>
          <p>Total: <strong>{this.props.total} &euro;</strong> </p>
        </div>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.cart.items,
    total: state.cart.total
  }
}

function mapDispatchToProps (dispatch) {
  console.log(bindActionCreators(cartActions, dispatch))
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

CartContainer.defaultProps = {
  items: [],
  total: 0
}

CartContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
