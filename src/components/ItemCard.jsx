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

import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Button1 from "./Buttons/Button1";

function ItemCard({ producto, active }) {
  let stile = {
    margin: "10px",
  };

  const [lines, setLines] = useState(true);
  return (
    
    
      <Card display="flex" alignContent='center' margin="10px">
        <CardBody
          display='flex'
          flexDirection="column"
          alignItems="center"
        >
          <Image
            boxSize="15vw"
            src={producto.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />

          <Stack mt="2" spacing="3">
            <Heading>
              <Link to={`/item/${producto.id}`}>
                <button
                  onClick={() => setLines(!lines)}
                  className={lines ? "butoon" : ""}
                >
                  {producto.title}
                </button>
              </Link>
            </Heading>
            {active ? (
              <Text
                fontSize={{ base: "15px", sm: "20px", md: "20px" }}
                onClick={() => setLines(false)}
                className="button"
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

        <ItemCount textButoon="Agregar a Carrito" producto={producto} />
      </Card>
    
  );
}

export default ItemCard;
