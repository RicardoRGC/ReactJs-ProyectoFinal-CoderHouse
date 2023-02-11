import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { DatosContextProvider } from "./context/DatosContextarc";
import { CartContextProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <DatosContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </DatosContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
