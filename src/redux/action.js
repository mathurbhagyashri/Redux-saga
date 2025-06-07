
import {REMOVE_TO_CART} from "./constants"

export const addToCart = (data) => {
  console.warn("action called", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};
