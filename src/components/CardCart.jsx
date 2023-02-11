import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import Button1 from "./Buttons/Button1";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
function CardCart({ item }) {
  const { removeItem } = useContext(CartContext);
  const styleButoon = {
    height: '28px',
    size: '10px',
    fontsize: '0.9vw',

  }
  return (
    <Card  w={250 }  alignItems="center" margin="10px">
      <Image
        alignItems="center"
        boxSize="10vw"
        src={item.image}
        borderRadius="sm"
      />

      <CardHeader>
        <Heading height="72px" size="md">
          {item.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text textAlign="center" alignContent="center">
          Cantidad:{item.cantidad}
        </Text>
      </CardBody>

      <CardFooter
        display="flex"
        flexWrap="wrap"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <ItemCount styleButoon={styleButoon} textButoon="Modificar" producto={item}></ItemCount>
        <Button1
        styleButoon={styleButoon}
          texto="eliminar"
          handleClick={() => removeItem(item)}
        ></Button1>
      </CardFooter>
    </Card>
  );
}

export default CardCart;
