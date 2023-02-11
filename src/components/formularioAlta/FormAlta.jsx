import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";
import { DatosContext } from "../../context/DatosContextarc";
const FormAlta = () => {
  const [data, spinner, setFire] = useContext(DatosContext);

  const inicialChange = {
    category: "",
    title: "",
    price: "",
    image: "",
  };
  const [inputchange, setInputchange] = useState(inicialChange);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputchange);
    setInputchange(inicialChange);
    setFire(inputchange);
  };
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // console.log(name, value);
    setInputchange({ ...inputchange, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>Category</FormLabel>
      <Input onChange={handleChange} name="category" placeholder="Category" />
      <FormLabel>title</FormLabel>
      <Input onChange={handleChange} name="title" placeholder="title" />
      <FormLabel>precio</FormLabel>
      <Input onChange={handleChange} name="price" placeholder="precio" />
      <FormLabel>Imagen</FormLabel>
      <Input onChange={handleChange} name="image" placeholder="Imagen" />

      <Button type="submit" mt={4} colorScheme="teal">
        Enviar
      </Button>
    </form>
  );
};

export default FormAlta;
