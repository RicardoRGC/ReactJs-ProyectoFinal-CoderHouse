import React from "react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function ButtonTostada({ nombre, handleClick, patch }) {
  const toast = useToast();
  return (
    <Button
      marginStart="0px"
      marginLeft="10px"
      marginRight="10px"
      onClick={() => {
        toast({
          title: nombre,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        handleClick(patch);
      }}
    >
      {nombre}
    </Button>
  );
}

export default ButtonTostada;
