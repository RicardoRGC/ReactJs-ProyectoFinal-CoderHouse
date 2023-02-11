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
  Box,
  Link,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import ItemCount from "../ItemCount";
import Button1 from "../Buttons/Button1";
import { CartContext } from "../../context/CartContext";
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
        maxW={{ base: "100%", sm: "50px" }}
        src={producto.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody paddingBottom="0">
          <Heading size="sm">{producto.title}</Heading>

          <Text py="2" fontSize="xs">
            Cantidad: {producto.cantidad}
          </Text>
          <Text py="2" fontSize="xs">
            Precio: {producto.price}
          </Text>
        </CardBody>
      </Stack>
      <CardFooter
        paddingTop="0"
        paddingBottom={0}
        justifyContent="center"
        flexWrap="wrap"
      >
        <ItemCount
          styleButoon={styleButoon}
          textButoon="Modificar"
          producto={producto}
        ></ItemCount>
      </CardFooter>
      <Box display={"flex"} justifyContent="flex-end" w="100%">
        <Link>
          <DeleteIcon m={5} w={5} h={5} onClick={() => removeItem(producto)} />
        </Link>
      </Box>
    </Card>
  );
};

export default ItemCard2;
