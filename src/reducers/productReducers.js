import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_CLEAR,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload }

    case PRODUCT_LIST_FAIL:
      return { error: action.payload }

    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload }

    case PRODUCT_DETAILS_FAIL:
      return { error: action.payload }

    case PRODUCT_DETAILS_CLEAR:
      return { product: { reviews: [...state.product.reviews] } }

    default:
      return state
  }
}
