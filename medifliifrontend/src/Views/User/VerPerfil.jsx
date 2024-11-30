import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import CardUser from '../../Components/Users/CardUser'

export default function VerPerfil() {
    const navigate = useNavigate()
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
  return (
    <>
        <main>
             <CardUser user={user} />
        </main>
    </>
  )
}
