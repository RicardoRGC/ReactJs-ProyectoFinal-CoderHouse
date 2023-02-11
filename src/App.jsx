import NavBar from "./Routes/NavBar";
import "./index.css";
import ItemListContainer from "./Routes/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./NotFound";
import Nosotros from "./Routes/Nosotros";
import ItemDetailContainer from "./Routes/ItemDetailContainer";
import LoginUser from "./Routes/LoginUser";
import RegisterUser from "./Routes/RegisterUser";
import ItemListShopping from "./Routes/ItemListShopping";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar post="fixed" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/loginIn" element={<LoginUser  />} />
          <Route path="/itemShopp" element={<ItemListShopping  />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
