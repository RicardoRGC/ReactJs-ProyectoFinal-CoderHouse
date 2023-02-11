import React, { useContext, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import CartWidget from "../components/NavBar/CartWidget";
import CartShop from "../components/NavBar/CartShop";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function NavBar() {
  const { elemento, setElemento, Delete, add } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  useEffect(() => {
    // console.log(elemento);
  }, []);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">NH BLANQUERIA</Link>
        </div>
        <nav className="nav-link">
          <NavLink to="/nosotros" className="links">
            Nosotros
          </NavLink>
          <NavLink to="/" className="links">
            Productos
          </NavLink>
          <NavLink className="links">
            <button ref={btnRef} onClick={onOpen}>
              cart
            </button>
          </NavLink>
          <NavLink to="caracteristicas/" className="links">
            Caracteristicas
          </NavLink>
          <NavLink to="locales" className="links">
            Locales
          </NavLink>
        </nav>
        <div className="icon">
          {elemento.length != 0 && (
            <CartWidget btnRef={btnRef} onOpen={onOpen}></CartWidget>
          )}
          {/* <Carro></Carro> */}
        </div>
      </div>
      <div className="bloque"></div>

      <CartShop isOpen={isOpen} onOpen={onOpen} onClose={onClose}></CartShop>
    </>
  );
}

export default NavBar;
