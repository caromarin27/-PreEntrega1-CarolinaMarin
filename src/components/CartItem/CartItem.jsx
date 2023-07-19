import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex justify-between text-center items-center">
      <h4 className="font-bold"> {item.title} </h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: {item.price}</p>
      <button type="button" onClick={() => removeItem(item.id)}>
        {" "}
        <ion-icon name="close-circle-outline"></ion-icon>{" "}
      </button>
      <hr />
    </div>
  );
};

export default CartItem;
