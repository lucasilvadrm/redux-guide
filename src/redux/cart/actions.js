import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload
  }
}

export const removeProductToCart = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
  }
}

export const incrementProductInCart = (payload) => {
  return {
    type: CartActionTypes.INCREMENT_PRODUCT,
    payload
  }
}

export const decrementProductInCart = (payload) => {
  return {
    type: CartActionTypes.DECREMENT_PRODUCT,
    payload
  }
}