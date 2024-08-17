import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';

/* import { useParams } from 'react-router-dom'; */

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Agregado para controlar el estado de carga

    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/productos.json')
                const data = await response.json()
                const filteredProducts = categoryId
                    ? data.filter(p => p.categoria === categoryId)
                    : data;

                setProducts(filteredProducts);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Indica que la carga ha terminado
            }
        }
        fetchData()
    }, [categoryId]);

    console.log(products)


    return (
        <>
            {loading ? <Spinner /> : <ItemList products={products} />}
        </>
    )
}

export default ItemListContainer;