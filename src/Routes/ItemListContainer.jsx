import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import TostadaItems from "../components/Buttons/TostadaItems";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner1 from "../components/Spinner";
import { DatosContext } from "../context/DatosContextarc";

const ItemListContainer = () => {
  const params = useParams();
  const { fireBase, getQuery, getFireBase } = useContext(DatosContext);
  // console.log(fireBase)
  function handleFetch() {
    JSON.stringify(params) === "{}"
      ? getFireBase()
      : // console.log(params.id)
        getQuery(params.id);
  }
  useEffect(() => {
    handleFetch();
  }, [params]);
  // console.log(fireBase);
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <TostadaItems />
      </Flex>

      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        pt="10px"
      >
        {!fireBase.length > 0 ? <Spinner1></Spinner1> : ""}
        {fireBase.map((greetingItem, index) => (
          <ItemCard
            key={index}
            producto={greetingItem}
            active={false}
          ></ItemCard>
        ))}
      </Box>
    </>
  );
};

export default ItemListContainer;
