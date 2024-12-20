import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Configuración() {
   return (
        <main>
            <h1 className="titulo-configuracion">CONFIGURACIÓN DE LA CUENTA</h1>
            <div className="contenedor-perfil">
                <section className="card-perfil">
                    <h2>Información del usuario</h2>
                    <p>Actualiza tus datos personales.</p>
                    <NavLink to="editUser">Modificar usuario</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Ver mi perfil</h2>
                    <p>Mira la información que tienes configurada.</p>
                    <NavLink to="myProfile">Ver perfil</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Modificar mi perfil</h2>
                    <p>Configura la información que tienes de tu perfil.</p>
                    <NavLink to="editProfile">Editar perfil</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Ver mi perfil</h2>
                    <p>Mira la información que tienes configurada.</p>
                    <NavLink to="/app/profiles/selectProfile">Cambiar de perfil</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Eliminar mi perfil</h2>
                    <p>Mira la información que tienes configurada.</p>
                    <NavLink to="/app/user/config/profiles/deleteProfile">Eliminar perfil</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Añadir película</h2>
                    <p>Añade una nueva película al catálogo.</p>
                    <NavLink to="/app/user/config/movies/createMovie">Añadir película</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Ver película</h2>
                    <p>Busca todas las películas del catálogo.</p>
                    <NavLink to="/app/search">Buscar películas</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Eliminar película</h2>
                    <p>Eliminar las películas del catálogo.</p>
                    <NavLink to="/app/movies/delete">Eliminar películas</NavLink>
                </section>

                <section className="card-perfil">
                    <h2>Actualizar información de películas</h2>
                    <p>Modificar las películas del catálogo.</p>
                    <NavLink to="/app/movies/update">Modificar películas</NavLink>
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
