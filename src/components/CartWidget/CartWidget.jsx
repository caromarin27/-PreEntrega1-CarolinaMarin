import './CartWidget.css';

const CartWidget = () => {
  const imgCart = 'https://cdn-icons-png.flaticon.com/512/107/107831.png';
  
  return (
    <>
    <div className="cart-widget">
      <img className='imgCarrito' src={imgCart} alt="carrito"></img>
      <span className='amount-items'><strong>10</strong></span>
    </div>
    </>
  )
}

export default CartWidget