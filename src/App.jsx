import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Contact from './components/Contact/Contact'



function App() {

  return (
    <>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/sneakers' element={<ItemListContainer />} />

          <Route path='/category/:categoryId' element={<ItemListContainer />} />

          <Route path='/item/:id' element={<ItemDetailContainer/>} />

          <Route path='/Contact' element={<Contact/>} />

          <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>

      

    </>
  )
}

export default App
