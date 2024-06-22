import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import { NavLink } from "react-router-dom";
import NgosPage from "./NgosPage";


const NgoNavbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" element={<NgosPage/>}/>
      </nav>
    </div>
  )
}

export default NgoNavbar
