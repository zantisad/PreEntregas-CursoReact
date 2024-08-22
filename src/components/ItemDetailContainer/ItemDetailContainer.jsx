import "./ItemDetailContainer.css"
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/productos.json')
        const data = await response.json()
        const newProduct = data.find(p => p.id === Number(id))
        setProduct(newProduct)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, []);

  return (
    <div className="item-detail-container">
      {!product ? <Spinner/> : <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer

