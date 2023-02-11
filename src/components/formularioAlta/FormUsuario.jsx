import React, { useEffect, useState } from "react";
import estilos from "./formUsuario.module.css";
import { useNavigate } from "react-router-dom";
import {
  FormLabel,
  Button,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Box,Text } from '@chakra-ui/react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../db/firebase-confing";
import useFireBase from "../../customHooks/useFirebase";
import Loading from "react-fullscreen-loading";
const FormUsuario = ({ data }) => {
  const { setSpinnerCart, spinnerCart } = useFireBase();
  const inicialChange = {
    mail: "",
    contrasenia: "",
  };
  const navigate = useNavigate();
  const [inputchange, setInputchange] = useState(inicialChange);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [login, setLogin] = useState(false);
  //------------------------------------

  //------------------------------------
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  //------------------------------------
  const registerUser = async (usuario) => {
    try {
      if (validateEmail(usuario.mail)) {
        const user = await createUserWithEmailAndPassword(
          auth,
          usuario.mail,
          usuario.contrasenia
        );
        console.log("usuario registrado", user);
        navigate(`/`);
      } else {
        console.log("no es un mail");

        alert("error al registrar el usuario");
      }
    } catch (error) {
      console.error(error);
      alert("error al registrar el usuario");
    }
  };

  //------------------------------------
  const HandleLogIn = async (usuario) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        usuario.mail,
        usuario.contrasenia
      );
      setSpinnerCart(true);
      alert("usuario logueado");
      navigate(`/`);
    } catch (error) {
      alert("error al loguear el usuario");
    }
  };
  //------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinnerCart(false);
    // console.log(inputchange);
    setInputchange(inicialChange);

    data == "Login" ? HandleLogIn(inputchange) : registerUser(inputchange);
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // console.log(name, value);
    setInputchange({ ...inputchange, [e.target.name]: e.target.value });
  };
  const [stateSpinnerNav, setStateSpinnerNav] = useState(false);
  useEffect(() => {
    setStateSpinnerNav(spinnerCart);
    console.log(stateSpinnerNav);
  }, [spinnerCart]);

  return (
    <>
      {!stateSpinnerNav ? (
        <Loading spin text="xin chờ" loading={true} loaderColor="#3498db" />
      ) : (
        ""
      )}
      <Box display="flex" justifyContent={'Center'}>
        <form className={estilos.form} onSubmit={handleSubmit}>
          <Text fontSize='5xl' as='b'>{data}</Text>
          <FormLabel></FormLabel>
          <Input
            m="10px"
            onChange={handleChange}
            name="mail"
            placeholder="mail"
            value={inputchange.mail}
          />
          <InputGroup size="md">
            <Input
            
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="contrasenia"
              onChange={handleChange}
              value={inputchange.contrasenia}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button type="submit" mt={4} colorScheme="teal">
            {data}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormUsuario;
