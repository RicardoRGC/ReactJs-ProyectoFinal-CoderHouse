import React, { createContext, useEffect, useState } from "react";
import useFireBase from "../customHooks/useFirebase";
export const CartContext = createContext();

export function CartContextProvider(props) {
  const {
    setCartShop,
    fireBaseCartShop,
    deleteCartShop,
    clearItemsCartShop,
    getFireBaseCartShop,
    setSpinnerCart
    ,spinnerCart
  } = useFireBase();
  const [elemento, setElemento] = useState([]);
  //------------------removeItem------------------
  const removeItem = (params) => {
    console.log(
      elemento.find((item) => item.idCompra == params.idCompra).idCompra
    );
    deleteCartShop(
      elemento.find((item) => item.idCompra == params.idCompra).idCompra
    );
    console.log(elemento);
    setElemento(elemento.filter((item) => item.id != params.id));
    console.log(elemento.length);
  };
  //------------------addItem------------------
  function addItem(params, count) {
    if (!isInCart(params)) {
      setSpinnerCart(false);
      //si el producto no esta en el carrito lo agrega
      console.log(params);
      let element = {
        id: params.id,
        title: params.title,
        cantidad: count == 0 ? 1 : count,
        image: params.image,
        price: params.price,
      };

      // setElemento([...elemento, element]);

      setCartShop(element);
    } else {
      //si el producto esta en el carrito lo modifica
      let arrayMOdificado = elemento.filter((item) => item.id != params.id);
      let element = elemento.find((item) => item.id == params.id);
      element.cantidad = count == 0 ? 1 : count;
      setElemento([...arrayMOdificado, element]);
    }
  }
  //------------------clearItems------------------
  function clearItems() {
    setElemento([]);
    clearItemsCartShop();
  }
  //------------------isInCart------------------
  function isInCart(params) {
    //verifica si el producto esta en el carrito
    let index = elemento.findIndex((item) => item.title == params.title);
    return index >= 0 ? true : false;
  }

  useEffect(() => {
    setElemento(fireBaseCartShop);
  }, [fireBaseCartShop]);
  return (
    <CartContext.Provider
      value={{
        elemento,
        setElemento,
        removeItem,
        addItem,
        clearItems,
        fireBaseCartShop,
        getFireBaseCartShop,spinnerCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
