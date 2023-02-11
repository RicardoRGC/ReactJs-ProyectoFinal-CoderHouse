import {
  Box,
  Card,
  Divider,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { DatosContext } from "../context/DatosContextarc";

const ItemListShopping = () => {
  const { fireBaseShop, getFireBaseShopping } = useContext(DatosContext);

  useEffect(() => {
    getFireBaseShopping();
  }, []);
  return (
    <>
      <Box display={"flex"} textAlign="center" justifyContent="center">
        <Text
          w={200}
          border={"solid"}
          borderColor="purple.500"
          borderRadius={50}
        >
          Compras realizadas
        </Text>
      </Box>
      <Box
        display="flex"
        flexWrap="nowrap"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt="10px"
      >
        {fireBaseShop.map((greetingItem, index) => (
          <Card key={index} marginBottom='50px'>
            <Text
              as="b"
              display="flex"
              justifyContent="space-evenly"
              border={"solid"}
              borderColor="purple.500"
              borderRadius={50}
            >
              fecha de compra :{" "}
              {greetingItem.datos.fechaCompra
                .toDate()
                .toString()
                .split(" ", 5)
                .slice(1, 4)
                .map((item, i) => (
                  <p key={i}>  {item} </p>
                ))}
            </Text>
            {greetingItem.productos.arrayVentas.map((p, i) => (
              <Card key={i} display="flex" flexDirection='row'>
                <ItemCard activeShop={true} producto={p}></ItemCard>
                <Box marginTop={50}>
                  <Card>
                    <Stat>
                      <StatLabel>Codigo pedido: {greetingItem.id}</StatLabel>
                      <StatNumber>cantidad {p.cantidad}</StatNumber>
                      <StatNumber>Precio {p.price}</StatNumber>
                    </Stat>
                  </Card>
                </Box>
              </Card>
            ))}
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ItemListShopping;
