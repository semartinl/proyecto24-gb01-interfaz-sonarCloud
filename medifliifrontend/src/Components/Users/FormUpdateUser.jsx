import React, { useState } from 'react'
import usersService from '../../Controller/userController';

export default function FormUpdateUser() {
    const [idUser, setIdUser] = useState(0);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmitUpdateUser = async (event)=>{
        
        event.preventDefault();
        const response = await usersService.putUser(idLanguage,nombre,pin,idUser,idLanguage).catch((error)=>{
            setError(error.message)
        })
    }
  return (
    <>
    
    <div className="card-header">
            <h5 className="text-center">Modificar User</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmitUpdateUser}>
              <label htmlFor="idUser">
                ¿Qué id tiene el User que quieres modificar?
              </label>
              <input
                type="number"
                id="idUser"
                name="idUser"
                onChange={(e)=>setIdUser(e.target.value)}
                value={idUser}
                required=""
              />
              <br />
              <br />
              <label>¿Qué nombre deseas poner?</label>
              <input
                type="text"
                className="form-control mb-3"
                name="username"
                required=""
                onChange={(e)=>setNombre(e.target.value)}
              />
              <br />
              <br />
              <label>¿Quieres cambiar el email?</label>
              <input
                type="email"
                className="form-control mb-3"
                name="email"
                required=""
                onChange={(e)=>setEmail(e.target.value)}
              />
              <br />
              <br />
              <label>¿Qué contraseña quieres poner?</label>
              <input
                type="password"
                className="form-control mb-3"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <br />
              <br />
              <button className="btn btn-primary" type="submit">

                Guardar
              </button>
            </form>
          </div>
    
    </>
  )
}
