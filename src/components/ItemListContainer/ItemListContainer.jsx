import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import {db} from '../../services/config';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const myProducts = id
      ? query(collection(db, "productos"), where("idCategory", "==", id))
      : collection(db, "productos");

    getDocs(myProducts)
      .then((res) => {
        const newProducts = res.docs.map((prod) => {
          const data = prod.data();
          return { id: prod.id, ...data };
        });
        setProducts(newProducts);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <main className="container mx-auto mt-20">
      <ItemList products={products} className="w-1/4 h-12 m-2" />
    </main>
  );
}

export default ItemListContainer