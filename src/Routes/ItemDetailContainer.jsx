import { Box, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Spinner1 from "../components/Spinner";
import { DatosContext } from "../context/DatosContextarc";
function ItemDetailContainer() {
  const {fireBase, spinner} = useContext(DatosContext);
  const [element, setElement] = useState({});
  const { id } = useParams();
  // console.log(fireBase);
  // setElement(fireBase.find((eleme) => eleme.id == id));
  useEffect(() => {
    fireBase.length > 0 ? setElement(fireBase.find((eleme) => eleme.id == id)) : "";
  }, [fireBase]);

  return (
    <div>
         <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        pt="10px"
      >
        {fireBase.length === 0 ? (
          <Spinner1></Spinner1>
        ) : (
          <>
            <ItemCard producto={element} active={true} />
          </>
        )}
      </Box>
    </div>
  );
}

export default ItemDetailContainer;
