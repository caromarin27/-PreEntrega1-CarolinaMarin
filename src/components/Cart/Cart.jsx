import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total, totalItems } = useContext(CartContext);

  if (totalItems === 0) {
    return (
      <>
        <div className="container mx-auto py-20 px-4">
          <div className="flex justify-center items-center flex-col">
            <img src="http://placekitten.com/200/300"></img>
            <h2>No hay productos en el carrito </h2>
            <Link
              to="/"
              className="text-white mt-4 bg-blue-500 hover:bg-blue-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700/80 mr-2 mb-2"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto py-5 px-4">
      <div className="flex flex-col justify-between">
        {cart.map((products) => (
          <CartItem key={products.id} {...products} />
        ))}
      </div>
      <hr />
      <div className="py-5">
        <h3 className="font-bold">Total: $ARS {total}</h3>
        <h3 className="font-bold">Cantidad Total: {totalItems}</h3>
        <button
          onClick={() => clearCart()}
          className="text-white bg-red-600 hover:bg-red-600/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-red-600/80 mt-4 mr-2 mb-2"
        >
          Vaciar carrito
        </button>
        <Link
          to="/checkout"
          className="text-white bg-violet-600 hover:bg-violet-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-violet-700/80 mt-4 mr-2 mb-2"
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
