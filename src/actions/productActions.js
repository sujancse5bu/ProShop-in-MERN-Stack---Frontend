import axios from 'axios'
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_CLEAR,
} from '../constants/productConstants'
import { LOADING_FALSE, LOADING_TRUE } from '../constants/loaderConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_CLEAR })
    dispatch({ type: LOADING_TRUE })
    const { data } = await axios.get('/api/products')
    dispatch({ type: LOADING_FALSE })
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: LOADING_FALSE })
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({ type: LOADING_FALSE })
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: LOADING_FALSE })
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
