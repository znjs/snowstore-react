import { CLEAR_CART } from "../reducer";

const clearCart = (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
export { clearCart };
