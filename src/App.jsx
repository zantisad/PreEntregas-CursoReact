import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import React, { useContext, useState, useEffect } from "react";
import { CartProvider } from "./Context/CartContext/CartProvider.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx"
import { Toaster, toast } from 'sonner'
import { db } from "./main"
import {getDocs, collection, getFirestore, query, where} from "firebase/firestore"

function App() {

  const [ products, setProducts ] = useState([])

  useEffect(()=> {
    const db = getFirestore();

    const q = query(collection(db,"item"), where("precio", "<", 100));

    getDocs(q).then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log("No hay resultados")
      }

      setProducts(
        querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      )
    })
  }, [])

  return (
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Toaster />

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
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
