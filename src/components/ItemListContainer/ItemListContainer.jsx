import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductByCategory } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  
  const {id} = useParams();
  
  useEffect(() => {
    const funcion = id ? getProductByCategory : getProducts;
    
    funcion(id)
      .then(res => setProducts(res))
  }, [id])
  
  return (
    <main className='container mx-auto'>
      <h2 className='greeting'>{props.greeting}</h2>
      <div>
        <ItemList products={products} className="w-1/4 h-12 m-2" />
      </div>
      <ItemCount />
    </main>
  )
}

export default ItemListContainer