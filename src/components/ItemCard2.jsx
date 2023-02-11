import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import Button1 from "./Buttons/Button1";
import { CartContext } from "../context/CartContext";
const ItemCard2 = ({ producto }) => {
  const { removeItem } = useContext(CartContext);
  const styleButoon = {
    height: "28px",
    size: "10px",
    fontsize: "0.9vw",
  };
  return (
    <Card
      flexWrap="wrap"
      direction={{ base: "row-reverse", sm: "row" }}
      overflow="hidden"
      variant="outline"
      justifyContent="center"
    >
      <Image
        marginTop="10px"
        borderRadius="md"
        objectFit="cover"
        maxW={{ base: "100%", sm: "150px" }}
        src={producto.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody paddingBottom="0">
          <Heading size="sm">{producto.title}</Heading>

          <Text py="2" fontSize="xs">
            Cantidad: {producto.cantidad}
          </Text>
        </CardBody>

        <CardFooter paddingTop="0" justifyContent="center" flexWrap="wrap">
          <ItemCount
            styleButoon={styleButoon}
            textButoon="Modificar"
            producto={producto}
          ></ItemCount>
          <Button1
            styleButoon={styleButoon}
            texto="eliminar"
            handleClick={() => removeItem(producto)}
          ></Button1>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ItemCard2;
