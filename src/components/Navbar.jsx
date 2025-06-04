import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='container'>

      <NavLink to="/">
        <img src={logo} alt="Logo" className='img__logo'/>
      </NavLink>
      <ul>
        <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/">Inicio</NavLink></li>
        <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/nosotros">Nosotros</NavLink></li>
        <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/servicios">Servicios</NavLink></li>
        <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/contacto">Contacto</NavLink></li>
      </ul>
   </nav>
  )
}

export default Navbar
