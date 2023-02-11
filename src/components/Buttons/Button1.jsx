import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import React from "react";

function Button1({ texto, handleClick, styleButoon }) {
  return (
    <Box
      display="flex"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        variant="solid"
        // height="48px"
        // width="200px"
        border="2px"
        borderColor="green.500"
        // size="sm"
        colorScheme="purple"
        onClick={() => handleClick()}
        style={styleButoon}
      >
        {texto}
      </Button>
    </Box>
  );
}

export default Button1;
