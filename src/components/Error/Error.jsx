import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>Error, pagina no encontrada</h1>
        <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default Error