import { useState, useEffect } from "react"
import { getProductById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  
  useEffect(()=> {
    getProductById(id)
      .then(res => setProduct(res))
  }, [id])
  
  return (
    <ItemDetail {...product} />
  )
}

export default ItemDetailContainer