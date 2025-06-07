import { addToCart, emptyCart } from "../redux/action";
import { removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "samsung",
    type: "mobile",
    price: 20000,
    color: "green",
  };

  return (
    <div className="main-container">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
    </div>
  );
}

export default Main;
