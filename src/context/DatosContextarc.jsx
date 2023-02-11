import React, { createContext, useEffect, useState } from "react";
// import useAxios from "../customHooks/useAxios";
import { db,auth } from "../../db/firebase-confing.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";




export const DatosContext = createContext();
export function DatosContextProvider(props) {

  //------------------------------------------Crear usuario

  // const auth = getAuth();
// createUserWithEmailAndPassword(auth, "gonzalezricardo.c90@gmail.com", "123456")
// .then((userCredential) => {
//   // Signed in 
//   const user = userCredential.user;

//   console.log(user);
//   // ...
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // ..
// });
//------------------------------------------iniciar sesion

// signInWithEmailAndPassword(auth, "gonzalezricardo.c90@gmail.com", "123")
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
 
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

  
//------------------------------------------
  const [fireBase, setFireBase] = useState([]);
  // const productos = collection(db, "productos");
  const [spinner, Setspinner] = useState(true);
  // const [data] = useAxios("../../datos.json");

  const getFireBase = async () => {
    // const querySnapshot = await getDocs(productos);

    // const docs = querySnapshot.docs.map((doc) => doc.data());
    // // console.log(docs)
    // setFireBase(docs);
    const docs = [];
    const querySnapshot = await getDocs(collection(db, "productos"));

    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      docs.push({ ...doc.data(), id: doc.id });

      setFireBase(docs);
    });
    docs.length > 0 ? Setspinner(false) : Setspinner(true);
    //------------------------------------------

    // const q = query(collection(db, "productos"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //      console.log(doc.id, " => ", doc.data());

    //   });
    // });
  };
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
      console.log(producto);
      setFireBase(producto);
    });
  };

  //------------------------------------------
  const setFire = async (props) => {
    const docRef = await addDoc(collection(db, "productos"), props);
    console.log("Document written with ID: ", docRef.id);
  };
  // console.log(fireBase);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('entro')
        console.log(uid)
        // ...
      } else {
        // User is signed out
        console.log("no hay usuario")
      }
    });
    // getQuery("cortina")
    getFireBase();
  }, []);

  return (
    <DatosContext.Provider value={{ fireBase, spinner, getFireBase, getQuery }}>
      {props.children}
    </DatosContext.Provider>
  );
}
