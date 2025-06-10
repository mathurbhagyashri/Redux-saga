import { addToCart, emptyCart } from "../redux/action";
import { removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const data = useSelector((state) => state.productData);
  console.warn("data in main component ... FROM SAGA", data);

  const dispatch = useDispatch();

  useEffect(() => dispatch(productList()), []);

  return (
    <div className="main-container">
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name: {item.name}</div>
            <div>Brand: {item.brand}</div>
            <div>category: {item.category}</div>
            <div>color: {item.color}</div>
            <div>price: {item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove to cart
              </button>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
