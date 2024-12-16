import React, { useContext, useEffect, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import UserContext from '../../../context/UserContext'
import ListSelectCardProfile from '../../../Components/Profiles/ListSelectCardProfile'
import profilesService from '../../../Controller/profileController'
import Loading from '../../../Components/Loading'
import { useNavigate } from 'react-router-dom'

export default function SelectProfile() {
  const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
  const {profile, setProfile} = useContext(ProfileContext)
  const [listProfiles, setListProfiles] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
    
  const handleCreateProfile = ()=>{
    if(listProfiles.length < 4){
      navigate("/app/user/config/profiles/createProfile")
    }
  }

  useEffect(()=>{
    profilesService.getProfilesByUserId(user.idUser).then((response)=>{
      setListProfiles(response)
      console.log(response)
    })
    setTimeout(()=>setLoading(false),2000)
  },[user.idUser])
  return (
    <>
    {loading? <Loading/> : 
    <div className="select-profile">
        <ListSelectCardProfile listProfiles={listProfiles}/>
        <button onClick={handleCreateProfile}>Crear nuevo perfil</button>
    </div>
    }
    
    </>
  )
}
