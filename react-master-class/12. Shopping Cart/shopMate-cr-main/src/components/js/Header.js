import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Logo from "../../assets/logo.png";
import "../css/Header.css";

export const Header = () => {
  const {cartList} = useCart();

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