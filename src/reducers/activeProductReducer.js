
import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_INIT
} from '../actions/types'

import initialState from './initialState'

export default function activeProductReducer (state = initialState.activeProduct, action) {
  switch (action.type) {
    case FETCH_PRODUCT_INIT:
      return {
        ...state,
        error: null,
        loading: true
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null,
        loading: false
      }
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
