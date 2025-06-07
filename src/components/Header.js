import { useSelector } from "react-redux";

const Header = () => {
    const result= useSelector((state)=>state.cartData);
    console.warn("redux data in header", result);
    
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src="https://th.bing.com/th/id/OIP.yCQldnBMFxmnVC7INYQJ0wHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=""/>
      </div>
    </div>
  );
};

export default Header;
