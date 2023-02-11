import React, { createContext, useEffect, useState } from "react";
import { db,  } from "../../db/firebase-confing.js";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import useFireBase from "../customHooks/useFirebase.jsx";

export const DatosContext = createContext();
export function DatosContextProvider(props) {
  //------------------------------------------
  // const productos = collection(db, "productos");
  const [spinner, Setspinner] = useState(true);
  // const [data] = useAxios("../../datos.json");
  const {
    fireBase,
    getFireBase,
    setFireBase,
    stateUserLogin,
    fireBaseShop,
    getFireBaseShopping,
  } = useFireBase();

  //------------------------------------------
  const getQuery = (filter) => {
    // console.log(filter);
    const q = query(
      collection(db, "productos"),
      where("category", "==", `${filter}`)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const producto = [];
      querySnapshot.forEach((doc) => {
        producto.push(doc.data());
      });
      // console.log(producto);
      setFireBase(producto);
    });
  };

  //------------------------------------------

  useEffect(() => {
    getFireBase();
    getFireBaseShopping();
  }, []);

  return (
    <DatosContext.Provider
      value={{
        fireBase,
        spinner,
        Setspinner,
        getFireBase,
        getQuery,
        stateUserLogin,
        fireBaseShop,
        getFireBaseShopping,
      }}
    >
      {props.children}
    </DatosContext.Provider>
  );
}
