import React, { useContext, useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import CartWidget from "../components/NavBar/CartWidget";
import Cart from "../components/NavBar/Cart";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import useFireBase from "../customHooks/useFirebase";
import estilos from "./navBar.module.css";
import Spinner1 from "../components/Spinner";
import Loading from "react-fullscreen-loading";
function NavBar() {
  const { elemento,spinnerCart } = useContext(CartContext);
  const { stateUserLogin, singOut } = useFireBase();
  const { isOpen, onOpen, onClose } = useDisclosure();
 const [stateSpinnerNav, setStateSpinnerNav] = useState(false)
  const btnRef = React.useRef();
useEffect(() => {
 
  setStateSpinnerNav(spinnerCart)
// console.log(stateSpinnerNav);
}, [spinnerCart])

  return (
    <>

{!stateSpinnerNav ?  <Loading spin text="xin chờ" loading={true} loaderColor="#3498db" /> : null}
      <div className={estilos.nav}>
        <div className={estilos.logo}>
          <Link to="/">NH BLANQUERIA</Link>
        </div>
        <nav className={estilos.NavLink}>
          <NavLink to="/nosotros" className={estilos.links}>
            Nosotros
          </NavLink>
          <NavLink to="/" className={estilos.links}>
            Productos
          </NavLink>

          <NavLink to="caracteristicas/" className={estilos.links}>
            Caracteristicas
          </NavLink>
        </nav>
        <nav className={estilos.navDerecha}>
          {stateUserLogin ? (
            <nav>
              <NavLink
                onClick={() => {
                  singOut();
                }}
                className={estilos.links}
              >
                SingOut
              </NavLink>
              <NavLink to="/itemShopp" className={estilos.links}>
                Mis Compras
              </NavLink>
            </nav>
          ) : (
            <nav
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <NavLink
                to="/register"
                className={estilos.links}
                style={{ marginRight: "30px" }}
              >
                Register
              </NavLink>
              <NavLink to="/loginIn" className={estilos.links}>
                Login
              </NavLink>
            </nav>
          )}
          <div className={estilos.icon}>

            {elemento.length != 0 && (
              <CartWidget btnRef={btnRef} onOpen={onOpen}></CartWidget>
            )}
            {/* <Carro></Carro> */}
          </div>
        </nav>
      </div>
      <div className={estilos.bloque}></div>

      <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose}></Cart>
    </>
  );
}

export default NavBar;
