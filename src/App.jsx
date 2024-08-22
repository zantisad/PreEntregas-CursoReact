import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import ThemeProvider from "./Context/ThemeContext/ThemeProvider";
import ThemeContext from "./Context/ThemeContext/ThemeContext.jsx";
import React, { useContext } from "react";
import { CartProvider } from "./Context/CartContext/CartProvider.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sneakers" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
