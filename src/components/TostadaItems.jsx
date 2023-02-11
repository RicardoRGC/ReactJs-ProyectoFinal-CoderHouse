import React, { useEffect, useState, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ButtonTostada from "./Buttons/ButtonTostada";
import { DatosContext } from "../context/DatosContextarc";

const categorias = [];
function TostadaItems() {
  const { fireBase, spinner } = useContext(DatosContext);
  //extraer category de fireBase
  if (fireBase != undefined && categorias.length == 0) {
    // console.log(categorias.length)
    fireBase.forEach((e) => {
      if (!categorias.includes(e.category)) {
        categorias.push(e.category);
      }
    });
  }

  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e}`);
  };
  const toast = useToast();
  return (
    <>
      <div className="tostadas">
        <ButtonTostada nombre={"Todas"} handleClick={handleClick} patch={""} />

        {categorias.map((e, i) => (
          <ButtonTostada
            className="tostada"
            key={i}
            nombre={e}
            handleClick={handleClick}
            patch={`category/${e}`}
          />
        ))}
      </div>
    </>
  );
}

export default TostadaItems;
