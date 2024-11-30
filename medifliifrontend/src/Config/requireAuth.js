import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

export const RequireAuth = () => {
  const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)

if (!isLoggedIn) {

return <Navigate to="/app/login"/>

}

return <Outlet/>

};