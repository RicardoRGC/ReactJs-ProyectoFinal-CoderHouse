import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db, auth } from "../../db/firebase-confing.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

function useFireBase() {
  const [fireBase, setFireBase] = useState([]);
  const [fireBaseShop, setFireBaseShop] = useState([]); //compras
  const [fireBaseCartShop, setFireBaseCartShop] = useState([]); //carrito
  const [spinnerCart, setSpinnerCart] = useState(true);
  const [stateUserLogin, setStateUserLogin] = useState(false);
  const [idUser, setIdUser] = useState("");
  const singOut = () => {
    signOut(auth)
      .then(() => {
        Console.log("No se encuentra logueado");
      })
      .catch((error) => {
        console.log("error");
        // An error happened.
      });
  };
  //------------------------------------------
  const stateloginUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log("usuario logueado", uid);

        idUser == "" ? setIdUser(uid) : setStateUserLogin(true);
      } else {
        console.log("no hay usuario logueado");
        setStateUserLogin(false);
      }
    });
  };
  //------------------------------------------
  const getFireBaseShopping = async () => {
    const docs = [];
    const q = query(collection(db, "Ventas"), where("IdCompra", "==", idUser));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docs.push({ ...doc.data(), id: doc.id });
    });
    setFireBaseShop(docs);
    return true;
  };
  //------------------------------------------
  const getFireBaseCartShop = async () => {
    let docs = [];

    const q = query(collection(db, "CardShop"), where("idUser", "==", idUser));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data().producto, idCompra: doc.id });
      });
      setFireBaseCartShop(docs);
    });
    return true; 
  };
  //------------------------------------------
  const getFireBase = async () => {
    const docs = [];
    const querySnapshot = await getDocs(collection(db, "productos"));

    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      docs.push({ ...doc.data(), id: doc.id });

      setFireBase(docs);
    });
  };
  //------------------------------------------SetVentas
  //Collection Ventas cada venta con un id unico. esa venta tiene un array de productos
  const setVentas = async (venta) => {
    try {
      const docRef = await addDoc(collection(db, "Ventas"), venta);
      console.log("Document written with ID: ", docRef.id);

      getFireBaseShopping().then((res) => {
        if (res) {
          setSpinnerCart(res);
        }
      })
      return docRef.id
    } catch (error) {
      console.error(error);
    }
  };
  //------------------------------------------
  const setCartShop = async (producto) => {
    
    

    try {
      const product = {
        idUser: idUser,
        producto: producto,
      };

      const docRef = await addDoc(collection(db, "CardShop"), product);

      // console.log("Document written with ID: ", docRef.id);

     getFireBaseCartShop().then((res) => {
        if (res) {
          setSpinnerCart(true);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  //------------------------------------------
  const deleteCartShop = async (idCompra) => {
    const res = await deleteDoc(doc(db, "CardShop", idCompra));
  };
  //------------------------------------------
  const clearItemsCartShop = async () => {
    fireBaseCartShop.map((item) => {
      deleteCartShop(item.idCompra);
    });
  };
  //------------------------------------------
  useEffect(() => {
    // console.log(stateUserLogin);

    getFireBase();
    getFireBaseShopping();
    getFireBaseCartShop();

    stateloginUser();
  }, [idUser]);

  return {
    fireBase,
    getFireBase,
    setFireBase,
    stateUserLogin,
    singOut,
    setVentas,
    fireBaseShop,
    stateloginUser,
    idUser,
    getFireBaseShopping,
    setCartShop,
    fireBaseCartShop,
    deleteCartShop,
    clearItemsCartShop,
    getFireBaseCartShop,
    setSpinnerCart,
    spinnerCart,
  };
}

export default useFireBase;
