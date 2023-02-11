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
} from "@chakra-ui/react";

import CardCart from "../CardCart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ItemCard2 from "../ItemCard2";

function CartShop({ isOpen, onClose, btnRef }) {
  const { elemento, clearItems } = useContext(CartContext);

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
            <Box>
              <Button size='sm'  m={3} onClick={clearItems}>
                Limpiar Carrito
              </Button>
              <Button  size='sm' colorScheme="blue" m={3}>
                Comprar
              </Button>
            </Box>
            <Button  size='sm' variant="outline" m={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartShop;
