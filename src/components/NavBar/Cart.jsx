import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

import { CartContext } from "../../context/CartContext";
import { useContext, useEffect } from "react";
import ItemCard2 from "./ItemCard2";
import AlertCompra from "./AlertCompra";

function Cart({ isOpen, onClose, btnRef }) {
  const { elemento, clearItems, fireBaseCartShop, getFireBaseCartShop } =
    useContext(CartContext);
  useEffect(() => {
    getFireBaseCartShop();
    // console.log(fireBaseCartShop);
  }, []);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Compras</DrawerHeader>

          <DrawerBody>
            {elemento.map((item, i) => (
              <ItemCard2 key={i} producto={item}></ItemCard2>
            ))}
          </DrawerBody>

          <DrawerFooter
            display={{ md: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box padding={2} border="solid" display="flex">
              <Text> Precio Total: </Text>

              <Text>
                {elemento.reduce((acc, item) => {
                  return (acc += parseFloat(item.price * item.cantidad));
                }, 0)}
                $
              </Text>
            </Box>

            <Box>
              <Button size="sm" m={3} onClick={clearItems}>
                Limpiar Carrito
              </Button>

              <AlertCompra></AlertCompra>
            </Box>
            <Button size="sm" variant="outline" m={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
