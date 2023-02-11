import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
  Box,
  IconButton,
  Input,
} from "@chakra-ui/react";

import style from "./ItemCard.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Button1 from "./Buttons/Button1";

function ItemCard({ producto, active, activeShop }) {
  let stile = {
    margin: "10px",
  };

  const [lines, setLines] = useState(false);
  return (
    <Card display="flex" alignContent="center" margin="10px">
      <CardBody display="flex" flexDirection="column" alignItems="center">
        <Link to={`/item/${producto.id}`}>
          <Image
            boxSize="15vw"
            src={producto.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Link>

        <Stack mt="2" spacing="3">
          <Heading>
            <Link to={`/item/${producto.id}`}>
              <button onClick={() => setLines(!lines)} className={style.butoon}>
                {producto.title}
              </button>
            </Link>
          </Heading>
          {active ? (
            <Text
              fontSize={{ base: "15px", sm: "20px", md: "20px" }}
              onClick={() => setLines(!lines)}
              className={lines ? style.butoon : ""}
            >
              {producto.description}
            </Text>
          ) : (
            ""
          )}

          <Text
            fontSize={{ base: "15px", sm: "20px", md: "30px" }}
            color="blue.600"
            textAlign="center"
          >
            {producto.price} $
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      {!activeShop && (
        <ItemCount textButoon="Agregar a Carrito" producto={producto} />
      )}
    </Card>
  );
}

export default ItemCard;
