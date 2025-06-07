import "./App.css";

import { addToCart } from "./redux/action";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product={
    name:'samsung',
    type:'mobile',
    price:20000,
    color:'green'
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
