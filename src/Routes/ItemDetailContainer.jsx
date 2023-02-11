import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Spinner1 from "../components/Spinner";
import { DatosContext } from "../context/DatosContextarc";
function ItemDetailContainer() {
  const [data, spinner] = useContext(DatosContext);
  const [element, setElement] = useState({});
  const { id } = useParams();
  // console.log(data);
  // setElement(data.find((eleme) => eleme.id == id));
  useEffect(() => {
    data.length > 0 ? setElement(data.find((eleme) => eleme.id == id)) : "";
  }, [data]);

  return (
    <div>
      <Flex wrap="wrap" alignItems="center" justifyContent="center" pt="10px">
        {data.length === 0 ? (
          <Spinner1></Spinner1>
        ) : (
          <>
            <ItemCard producto={element} active={true} />
          </>
        )}
      </Flex>
    </div>
  );
}

export default ItemDetailContainer;
