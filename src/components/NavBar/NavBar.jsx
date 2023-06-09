import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import PetIcon from '../../assets/pawprint.png';

const NavBar = () => {
  return (
    <>
      <header>
        <div className='logo-container'>
          <img className='logo' src={PetIcon} alt="pet paw" />
          <h1>Hummus Pet Store</h1>
        </div>
        <nav>
          <ul>
            <li><a>Inicio</a></li>
            <li>Alimentos</li>
            <li>Accesorios</li>
            <li>Estética e Higiene</li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  )
}

export default NavBar