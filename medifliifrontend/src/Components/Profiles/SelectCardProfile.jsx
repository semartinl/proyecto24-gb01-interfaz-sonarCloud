import React, { useContext } from 'react'
import ProfileContext from '../../context/ProfileContext'
import { useNavigate } from 'react-router-dom'

export default function SelectCardProfile({prof}) {
  const navigate = useNavigate()
  const {profile, setProfile} = useContext(ProfileContext)
  const handleSelectProfile = () => {
    setProfile(prof)
    setTimeout(()=>console.log(profile),2000)
    navigate("/app/user/config")
    
    }
  return (
    <div className = "card-profile" onClick={handleSelectProfile}>
      <p>Nombre perfil: {prof.profileName}</p>
    </div>
  )
}
