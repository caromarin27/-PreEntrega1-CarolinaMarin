import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
	
  const incrementar = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }
  
  const decrementar = () => {
    if(count > initial) {
      setCount(count - 1);
    }
  }
  
  
  return (
    <>
      <div className="flex justify-between py-4 sm:w-1/3 items-center">
      <button onClick={decrementar} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'> - </button>
        <p>{count}</p>
      <button onClick={incrementar} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'> + </button>
      </div>
      <button onClick={() => onAdd(count)} className='text-white bg-violet-600 hover:bg-violet-700/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-violet-700/80 mr-2 mb-2'>Agregar</button> 
      
    </>
  )
}

export default ItemCount