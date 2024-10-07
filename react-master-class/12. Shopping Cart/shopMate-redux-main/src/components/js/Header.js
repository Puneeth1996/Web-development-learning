import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../css/Header.css";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="ShopMate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}