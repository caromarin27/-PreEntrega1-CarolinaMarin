import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const newDoc = doc(db, "productos", id);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProduct(newProduct);
      })
      .catch((error) => {
        console.log("No se pudo obtener el producto", error);
      });
  }, [id]);

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
