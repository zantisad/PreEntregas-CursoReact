import React from 'react'
import { NavLink } from 'reactstrap'
import "../Home/Home.css"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Portada from '../Portada/Portada'

const Home = () => {
    return (
        <>
            <Portada/>
            <ItemListContainer />
        </>
    )
} 

export default Home