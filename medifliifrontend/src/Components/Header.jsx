import React from 'react'
import { NavLink } from 'react-router-dom'
import './../css/header.css'

export default function Header() {
  return (
    <header className='topsidebar-header'>
        <NavLink >
            <img src='/assets/icons/medifli_M.png' alt="M de mediflii" />
        </NavLink>

        <form action="" method="get" className='search-header'>
            <input type="text" name="value_contenido" id="value_contenido" className='button-redondeado'/>
        </form>

        <section className="section-header-topbar">

            <NavLink> Mi lista de favoritos</NavLink>
            <NavLink> Inicio de sesión</NavLink>
            <NavLink> Registrarse</NavLink>
            <NavLink> Mi cuenta</NavLink>
        
        </section>



    
    </header>
  )
}
