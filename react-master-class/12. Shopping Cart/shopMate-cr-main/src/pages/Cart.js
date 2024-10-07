import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";
// import { CartContext } from "../context/CartContext";
// import { useContext } from "react";

export const Cart = () => {
  // const {total} = useContext(CartContext);
  // const {total} = useContext(CounterContext);
  // const {total} = useContext(FilterContext);
  const { total, cartList } = useCart();
  useTitle("Cart");
  console.log(cartList)

  // const products = [
  //   {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
  //   {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}
  // ]
  
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }
      </section>
    </main>
  )
}