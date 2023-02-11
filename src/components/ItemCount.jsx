import React, { useContext, useState } from "react";
import { CgAddR } from "react-icons/cg";
import { GoDiffRemoved } from "react-icons/go";
import {
  Text,
  Button,
  ButtonGroup,
  CardFooter,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import Button1 from "./Buttons/Button1";
function ItemCount({ producto, textButoon ,styleButoon }) {
  const { addItem } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(producto.cantidad!=undefined?producto.cantidad:0);
  let stile = {
    margin: "10px",
  };
  return (
    <>
      <Button1
      styleButoon={styleButoon}
        texto={textButoon}
        handleClick={() => {
          addItem(producto, itemCount);
        }}
      ></Button1>
      <CardFooter justifyContent="center" padding="0px">
        <ButtonGroup>
          <IconButton
            style={stile}
            variant="outline"
            colorScheme="purple"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<CgAddR color="purple" />}
            onClick={() => setItemCount(itemCount + 1)}
          />
          <Text
            display="flex"
            margin="0px 8px"
            as="b"
            textAlign="center"
            fontSize="sm"
            alignItems="center"
          >
            {itemCount}
          </Text>
          <IconButton
            style={stile}
            variant="outline"
            colorScheme="purple"
            aria-label="Call Sage"
            fontSize="sm"
            width={{ md: 10 }}
            icon={<GoDiffRemoved color="purple" />}
            onClick={() => setItemCount(itemCount === 0 ? 0 : itemCount - 1)}
          />
        </ButtonGroup>
      </CardFooter>
    </>
  );
}

export default ItemCount;
