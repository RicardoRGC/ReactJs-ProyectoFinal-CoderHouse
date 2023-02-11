import React, { createContext, useState } from "react";
export const CartContext = createContext();

export function CartContextProvider(props) {
  const [elemento, setElemento] = useState([]);

  const removeItem = (params) => {
    let arrayMOdificado = elemento.filter((item) => item.id != params.id);
    console.log(arrayMOdificado);
    setElemento(arrayMOdificado);
    console.log(elemento.length);
  };
  function addItem(params, count) {
    if (!isInCart(params)) {
      // let array = elemento;
      // array.push(params);
      let element = {
        id: params.id,
        title: params.title,
        cantidad: count==0?1:count,
        image: params.image,
      };
      setElemento([...elemento, element]);
      console.log(elemento);
    } else {
      let arrayMOdificado = elemento.filter((item) => item.id != params.id);
      let element = elemento.find((item) => item.id == params.id);
      element.cantidad = count;
      setElemento([...arrayMOdificado, element]);
    }
  }
  function clearItems() {
    setElemento([]);
  }

  function isInCart(params) {
    let index = elemento.findIndex((item) => item.title == params.title);
    // console.log(index);
    return index >= 0 ? true : false;
  }
  // console.log(items);
  return (
    <CartContext.Provider
      value={{ elemento, setElemento, removeItem, addItem, clearItems }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
