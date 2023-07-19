import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <div className="cart-widget">
          <ion-icon name="cart-outline"></ion-icon>
          {totalItems > 0 && (
            <span className="amount-items">
              <strong>{totalItems}</strong>
            </span>
          )}
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
