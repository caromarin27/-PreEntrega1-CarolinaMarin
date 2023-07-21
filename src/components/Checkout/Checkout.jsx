import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const [clientName, setClientName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientEmailConfirmation, setClientEmailConfirmation] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  
  const {cart, clearCart, total} = useContext(CartContext);
  
  const handlerForm = (e) => {
    e.preventDefault();

    if (!clientName || !clientLastName || !clientPhone || !clientEmail || !clientEmailConfirmation) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (clientEmail !== clientEmailConfirmation) {
      setError("Los campos del email no coinciden");
      return;
    }

    let orderDetails = {
      buyer: {
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
      },
      items: cart.map((prod) => ({
        id: prod.item.id,
        title: prod.item.title,
        quantity: prod.quantity,
        price: prod.item.price,
      })),
      date: new Date(),
      total: total,
    };

    Promise.all(
      orderDetails.items.map(async (prodOrder) => {
        const productRef = doc(db, "productos", prodOrder.id);
        const productDoc = await getDoc(productRef);
        const currentStock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: currentStock - prodOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orderDetails)
          .then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
          })
          .catch((error) => {
            console.log("Error al crear la compra", error);
            setError(
              "Se produjo un error al crear la orden, intenta nuevamente"
            );
          });
      })
      .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError(
          "Se produjo un error al actualizar el stock, intenta nuevamente"
        );
      });
  }
  
  return (
    <div className="container px-4 mx-auto">
      <h2 className="uppercase text-md font-bold mb-2">Checkout</h2>
      <form onSubmit={handlerForm}>
        {cart.map((prod) => {
          <div key={prod.item.id}>
            <p>
              {prod.item.title} x {prod.quantity}
            </p>
            <p>{prod.item.price} </p>
            <hr />
          </div>;
        })}
        <hr />

        <div className="py-5">
          <div className="form-group">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nombre:
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="form-group">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apellido:
            </label>
            <input
              type="text"
              value={clientLastName}
              onChange={(e) => setClientLastName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="form-group">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Telefono:
            </label>
            <input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="form-group">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="form-group">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Confirmar Email:
            </label>
            <input
              type="email"
              value={clientEmailConfirmation}
              onChange={(e) => setClientEmailConfirmation(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="text-white mt-4 bg-violet-600 hover:bg-violet-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-violet-700/80 mr-2 mb-2"
          >
            Finalizar Compra
          </button>
        </div>
      </form>

      {orderId && (
        <strong>Gracias por tu compra! Tu numero de Orden es {orderId}</strong>
      )}
    </div>
  );
}

export default Checkout