import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Configuración() {
   return (
        <main>
            <h1 className="titulo-configuracion">CONFIGURACIÓN DE LA CUENTA</h1>
            <div className="contenedor-perfil">
                <section className="card-perfil">
                    <h2>Información del perfil</h2>
                    <p>Actualiza tus datos personales.</p>
                    <NavLink to="editUser">Editar perfil</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Tus alojamientos favoritos</h2>
                    <p>Revisa todos tus alojamientos favoritos</p>
                    <NavLink to="saved">Ver mis alojamientos favoritos</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis propiedades registradas</h2>
                    <p>Gestiona, actualiza y revisa toda la información acerca de tus apartamentos favoritos</p>
                    <NavLink to="mis-alojamientos">Gestionar mis alojamientos</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis reservas</h2>
                    <p>Recuerda y revisa tus reservas realizadas</p>
                    <NavLink to="/">Ver mis reservas</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>ELIMINAR CUENTA</h2>
                    <p>¡¡¡¡CUIDADO!!!</p>
                    <NavLink to="deleteUser">Eliminar cuenta</NavLink>
                </section>

                

            </div>

        </main>
    );

}
