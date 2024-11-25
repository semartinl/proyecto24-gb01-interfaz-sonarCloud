import React, { useState } from 'react'
import profilesService from '../../Controller/profileController';

export default function FormUpdateProfile() {
    const [idProfile, setIdProfile] = useState(0);
    const [nombre, setNombre] = useState("");
    const [pin, setPin] = useState("");
    const [idUser, setIdUser] = useState("");
    const [idLanguage, setIdLanguage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmitUpdateProfile = async (event)=>{
        
        event.preventDefault();
        const response = await profilesService.putProfile(idLanguage,nombre,pin,idUser,idLanguage).catch((error)=>{
            setError(error.message)
        })
    }
  return (
    <>
    
    <div className="card-header">
            <h5 className="text-center">Modificar ProfileUser</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmitUpdateProfile}>
              <label htmlFor="idProfile">
                ¿Qué id tiene el Profile que quieres modificar?
              </label>
              <input
                type="number"
                id="idProfile"
                name="idProfile"
                onChange={(e)=>setIdProfile(e.target.value)}
                value={idProfile}
                required=""
              />
              <br />
              <br />
              <label>¿Qué nombre deseas poner?</label>
              <input
                type="text"
                className="form-control mb-3"
                name="name"
                required=""
                onChange={(e)=>setNombre(e.target.value)}
              />
              <br />
              <br />
              <label>¿Quieres cambiar la contraseña?</label>
              <input
                type="number"
                className="form-control mb-3"
                name="pin"
                required=""
                onChange={(e)=>setPin(e.target.value)}
              />
              <br />
              <br />
              <label>¿A qué idioma quieres cambiar?</label>
              <input
                type="number"
                className="form-control mb-3"
                name="idLanguage"
                onChange={(e)=>setIdLanguage(e.target.value)}
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
