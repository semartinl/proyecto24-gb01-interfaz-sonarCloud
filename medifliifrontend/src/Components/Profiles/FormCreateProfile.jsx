import React, { useState } from 'react'
import profilesService from '../../Controller/profileController';

export default function FormCreateProfile() {
    const [nombre, setNombre] = useState("");
    const [pin, setPin] = useState("");
    const [idUser, setIdUser] = useState("");
    const [idLanguage, setIdLanguage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmitPostProfile = async (event)=>{
        
        event.preventDefault();
        const response = await profilesService.addProfile(nombre,pin,idUser,idLanguage).catch((error)=>{
            setError(error.message)
        })
    }
  return (
    <>
    
    <div className="card-header">
            <h5 className="text-center">Insertar ProfileUser</h5>
          </div>
          <div className="card-body">
          {error? <p>{error}</p> : null}
            <form onSubmit={handleSubmitPostProfile}>
              <label>Nombre del Profile</label>
              <input
                type="text"
                className="form-control mb-3"
                name="name"
                required=""
                onChange={(e)=> setNombre(e.target.value)}
              />
              <br />
              <br />
              <label>PIN del Profile</label>
              <input
                type="number"
                className="form-control mb-3"
                name="pin"
                required=""
                onChange={(e)=> setPin(e.target.value)}
              />
              <br />
              <br />
              <label>¿A qué usuario se asocia este perfil?</label>
              <input
                type="number"
                className="form-control mb-3"
                name="idUser"
                required=""
                onChange={(e)=> setIdUser(e.target.value)}
              />
              <br />
              <br />
              <label>¿Qué idioma quieres usar?</label>
              <input
                type="number"
                className="form-control mb-3"
                name="idLanguage"
                required=""
                onChange={(e)=> setIdLanguage(e.target.value)}
              />
              <br />
              <br />
              <button className="btn btn-primary" type="submit">

                Añadir
              </button>
            </form>
          </div>
    
    </>
  )
}
