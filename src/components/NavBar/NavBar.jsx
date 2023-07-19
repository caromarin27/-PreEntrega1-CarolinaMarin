import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="mx-auto flex max-w-7xl justify-between items-center w-full p-6 lg:px-8">
        <Link to="/">
          <div className="flex lg:flex-1 cursor-pointer">
            <img className="pr-5 logo" src={Logo} alt="pet paw" />
          </div>
        </Link>
        <nav className="lg:flex lg:gap-x-1">
          <ul className="flex">
            <li className="mr-10 text-black font-bold cursor-pointer hover:underline hover:text-violet-600">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="mr-10 text-black font-bold cursor-pointer hover:underline hover:text-violet-600">
              <NavLink to="/category/1">Alimentos</NavLink>
            </li>
            <li className="mr-10 text-black font-bold cursor-pointer hover:underline hover:text-violet-600">
              <NavLink to="/category/2">Accesorios</NavLink>
            </li>
            <li className="mr-10 text-black font-bold cursor-pointer hover:underline hover:text-violet-600">
              <NavLink to="/category/3">Estética e Higiene</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;
