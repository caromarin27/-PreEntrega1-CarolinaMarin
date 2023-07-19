import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, title, description, price, pictureUrl, stock}) => {
  const [addAmount, setAddAmout] = useState(0);
  
  const {addItem} = useContext(CartContext);
  
  const handlerAmount = (quantity) => {
    setAddAmout(quantity);
    const item = { id, title, price };
    addItem(item, quantity);
  };
  
  return (
    <div className="py-20">
      <div key={id} className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <img src={pictureUrl} className="img-fluid w-full h-full object-cover rounded-md border-2"/>
            </div>
          <div className="w-full lg:w-1/2 px-4 py-4">
            <div className="max-w-lg">
              <h2 className="text-3xl font-black mb-1"> {title}</h2>
              <h3 className="block text-2xl font-bold mb-5">ARS ${price}</h3>
              <p><span className="font-bold mb-2">ID: </span>{id}</p>
              <p><span className="font-bold mb-2">Descripcion</span> {description}</p>
              <p><span className="font-bold mb-2">Stock</span> {stock}</p>
            </div>
            {
              addAmount > 0 ? (
                <div>
                  <Link to='/cart' className='text-white mt-4 bg-violet-600 hover:bg-violet-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-violet-700/80 mr-2 mb-2'>Ver Carrito</Link>
                  <Link to='/' className='text-white mt-4 bg-blue-500 hover:bg-blue-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700/80 mr-2 mb-2'>Seguir Comprando</Link>
                  
                </div>
              ) : (<ItemCount initial={1} stock={stock} onAdd={handlerAmount}/>)
            }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail