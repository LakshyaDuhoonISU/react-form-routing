import './App.css'
import {useState, useEffect} from 'react'
import CreateProduct from './pages/CreateProduct'
import Users from './pages/Users'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      {/* <CreateProduct/> */}
      {/* <Users/> */}

      <BrowserRouter>
        <Routes>
            <Route path="/users" element={<Users/>}/>
            <Route path="/createproduct" element={<CreateProduct/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
