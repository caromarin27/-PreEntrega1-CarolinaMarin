import { useState } from "react"

const ItemCount = () => {
  const [count, setCount] = useState(1);
	
  const incrementar = () => {
    if(count < 10) {
      setCount(count + 1)
    }
  }
  
  const decrementar = () => {
    if(count > 1) {
      setCount(count - 1);
    }
  }
  
  return (
    <>
    <div className="flex justify-between">
     <button onClick={decrementar} className="rounded-full"> - </button>
      <p>{count}</p>
     <button onClick={incrementar}> + </button>
     <button>Add to Card</button> 
    </div>
    </>
  )
}

export default ItemCount