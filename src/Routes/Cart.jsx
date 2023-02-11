import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import Button1 from "../components/Buttons/Button1";
import ItemCard from "../components/ItemCard";
import CardCart from "../components/CardCart";
import { CartContext } from "../context/CartContext";
function Cart() {
  const { elemento, setElemento, clearItems } = useContext(CartContext);

  const stile = {
    width: "100px",
  };

  return (
    <>
      <Box
        
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="center"
        alignItems='center'
        
      >
        {elemento.length == 0 ? (
          <Text>Carrito Vacio</Text>
        ) : (
          elemento.map((item, i) => {
            return <CardCart key={i} item={item}></CardCart>;
          })
        )}
      </Box>
      {elemento.length != 0 && (
        <Box display="flex" justifyContent="space-around">
          <Button1 clase={stile} texto="Terminar Comprar" />

          <Button1 handleClick={clearItems} texto="Limpiar Carrito" />
        </Box>
      )}
    </>
  );
}

export default Cart;
