import { useCart } from "../context/CartContext";

export default function Checkout() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2>Order Summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
