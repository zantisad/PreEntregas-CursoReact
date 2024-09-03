import React, { useContext, useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import ThemeContext from "../../Context/ThemeContext/ThemeContext";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

const ItemListContainer = () => {
  const { isDarkMode } = useContext(ThemeContext); // `toggleTheme` no se utiliza, por lo que lo eliminé.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams(); // Extraemos el parámetro `categoryId` de la URL.

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const myProducts = categoryId
      ? query(collection(db, "item"), where("categoria", "==", categoryId))
      : collection(db, "item");

      getDocs(myProducts).then((res) => {
        const newProduct = res.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setProducts(newProduct)
        
      })
      .catch((error) => console.log("Hubo un errror" + error))
      .finally(() => setLoading(false))
  }, [categoryId]);

  return (
    <div id={isDarkMode ? "dark" : "light"}>
      {loading ? <Spinner /> : <ItemList products={products} />}{" "}
      {/* Mostramos un spinner mientras cargan los productos */}
    </div>
  );
};

export default ItemListContainer;
