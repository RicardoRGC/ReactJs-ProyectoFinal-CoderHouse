import { Avatar, AvatarBadge, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget({ btnRef, onOpen }) {
  const { elemento } = useContext(CartContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log(elemento.length);
    setCount(elemento.length);
  }, [elemento]);

  return (
    <>
      {/* <button style={{ position: "relative" }} ref={btnRef} onClick={onOpen}> */}
      <Link ref={btnRef} onClick={onOpen}>
        <Stack direction="row" spacing={4}>
          <Avatar
            bgColor="white"
            icon={
              <AiOutlineShoppingCart
                color="blueviolet"
                // style={{ color: "blueviolet" }}
                size={"2em"}
              />
            }
          >
            <AvatarBadge
              borderColor="white"
              bg="blueviolet"
              boxSize="1.5em"
              fontSize="1em"
            >
              {count}
            </AvatarBadge>
          </Avatar>
        </Stack>
      </Link>
      {/* </button> */}
    </>
  );
}

export default CartWidget;
