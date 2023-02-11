import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import useFireBase from "../../customHooks/useFirebase";
import { CartContext } from "../../context/CartContext";
import ModalAvisoImportante from "../ModalAvisoImportante";
import { Timestamp } from "firebase/firestore";
const FormShop = ({ onClose }) => {
  const [mensaje, setMensaje] = useState("");
  const { elemento, clearItems } = useContext(CartContext);
  const { setVentas, getFireBaseShopping, idUser ,setSpinnerCart} = useFireBase();
  const user = {
    nombre: "",
    tel: "",
  };

  const handleVenta = async (user1) => {
    setSpinnerCart(false)
    let precioTotal = elemento.reduce((acc, el) => {
      return (acc += parseFloat(el.price));
    }, 0);
    const venta = {
      productos: {
        arrayVentas: elemento,
        precioTotal,
      },
      datos: {
        nombre: user1.nombre,
        tel: user1.tel,
        fechaCompra: Timestamp.fromDate(new Date()),
      },
      IdCompra: idUser,
    };

    console.log(venta);
    const res = await setVentas(venta);
    setMensaje(`Compra realizada con exito Numero de pedido:${res}`);

    clearItems();
    getFireBaseShopping(idUser);
  };

  const [inputchange, setInputchange] = useState(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputchange);

    handleVenta(inputchange);
    setInputchange(user);
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // console.log(name, value);
    setInputchange({ ...inputchange, [e.target.name]: e.target.value });
  };
  const { isOpen, onOpen } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      {mensaje != "" ? (
        <ModalAvisoImportante mensaje={mensaje} Close={onClose} />
      ) : (
        ""
      )}
      <Button colorScheme="red" ml={3} onClick={onOpen}>
        Yes
      </Button>
      {/* <Button ml={4} ref={finalRef}>
              I'll receive focus on close
            </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingrese datos para Confirmar Compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre</FormLabel>
              <Input
                onChange={handleChange}
                name="nombre"
                ref={initialRef}
                placeholder="nombre"
              />
              <FormLabel>Telefono</FormLabel>
              <Input
                onChange={handleChange}
                name="tel"
                placeholder="telefono"
              />
              <Button type="submit" colorScheme="purple" mr={3}>
                Aceptar
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormShop;
