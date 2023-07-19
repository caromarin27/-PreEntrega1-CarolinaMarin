import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, pictureUrl, stock }) => {
  return (
    <>
      <div className="card bg-white rounded-lg p-2 shadow-lg hover:shadow-xl m-4">
        <img src={pictureUrl} alt={title} />
        <div className="item-info-container">
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
          <p className="font-bold">Precio: ARS$ {price}</p>
          <p>ID: {id}</p>
          <p>Stock: {stock}</p>
        </div>
        <Link to={`/item/${id}`}>
          <button
            type="button"
            className="text-white bg-violet-600 hover:bg-violet-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-violet-700/80 mt-4 mr-2 mb-2"
          >
            Ver Detalle
          </button>
        </Link>
      </div>
    </>
  );
};

export default Item;
