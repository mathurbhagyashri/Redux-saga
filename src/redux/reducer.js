import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";

export const carData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.warn("reducer called", action);
  //   // some logic
  //   return action.data;
  // } else {
  //   return "no data matched";
  // }
  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      console.warn("ADD_TO_CART condition", action);
      return 1 + 1;

      case REMOVE_TO_CART:
         // add to cart logic
      console.warn("REMOVE_TO_CART condition", action);
      return 1 - 1;
    default:
      //no case matched
      return "no case matched";

  }
};
