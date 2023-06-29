import './CartWidget.css';

const CartWidget = () => {
  
  return (
    <>
    <div className="cart-widget">
      <ion-icon name="cart-outline"></ion-icon>
      <span className='amount-items'><strong>10</strong></span>
    </div>
    </>
  )
}

export default CartWidget