import React from 'react'
import ListCardProfile from '../Profiles/ListCardProfile'
import CardProfile from '../Profiles/CardProfile'
import ListCreditCard from '../CreditsCards/ListCreditCard'

export default function CardUser({user}) {
  return (
    <div>

        <section className='card-content'>
            <h2>Información personal</h2>
            <img src={user.profilePicture} alt="Imagen de perfil" />
            <p>Nombre y apellidos: {user.Name} {user.Surname}</p>
            <p>Email: {user.Email}</p>
            
        </section>

        <section className='card-content'>
            <h2>Mis perfiles</h2>
            <ListCardProfile />
        </section>

        <section className="card-content">
            <h2>Información de mi perfil</h2>
            <CardProfile profile={null}/>
        </section>

        <section className="card-content">
            <h2>Mis método de pago</h2>
            <ListCreditCard listCreditCard={user.creditCards}/>
        </section>
    </div>
  )
}
