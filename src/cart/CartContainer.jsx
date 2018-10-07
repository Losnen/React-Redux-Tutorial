import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CartItemList from './CartItemList'
import * as cartActions from '../actions/cartActions'

class CartContainer extends Component {
  constructor (props) {
    super(props)
  }

  async componentWillMount () {
    this.props.actions.loadCartItems()
  }

  render () {
    return (
      <section className='container'>
        <CartItemList
          items={this.props.items}
        />
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
