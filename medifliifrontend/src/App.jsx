import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LogIn from './Views/login';
import SignUp from './Views/SignUp';
import Header from './Components/Header';

import Language from './Views/Estadistica/Language';
import FormCreateLanguage from './Components/Languages/FormCreateLanguage';
import FormDeleteLanguage from './Components/Languages/FormDeleteLanguage';
import FormUpdateLanguage from './Components/Languages/FormUpdateLanguage';

import Profile from './Views/Estadistica/Profile';
import FormCreateProfile from './Components/Profiles/FormCreateProfile';
import FormDeleteProfile from './Components/Profiles/FormDeleteProfile';
import FormUpdateProfile from './Components/Profiles/FormUpdateProfile';

import User from './Views/Estadistica/User';
import FormCreateUser from './Components/Users/FormCreateUser';
import FormDeleteUser from './Components/Users/FormDeleteUser';
import FormUpdateUser from './Components/Users/FormUpdateUser';
import { UserContextProvider } from './context/UserContext';
import Configuración from './Views/User/Configuración';
import ConfirmDeleteUser from './Views/User/ConfirmDeleteUser';


function App() {
  
  return (
    <UserContextProvider>
    
    <BrowserRouter>
                  <Header />
                    
                    
                
                    <Routes>
                      <Route path="/app" > 
                        
                    
                        
                        
                        <Route path="login" element={<LogIn />} /> 
                        <Route path="signup" element={<SignUp/>} /> 
                        <Route path="languages" element={<Language />} > 
                        </Route>
                        <Route path="profiles" element={<Profile />} /> 
                        
                        
                        <Route path='languages/create' element={<FormCreateLanguage/>}/>
                        <Route path='languages/delete' element={<FormDeleteLanguage/>}/>
                        <Route path='languages/update' element={<FormUpdateLanguage/>}/>
                        <Route path='profiles/create' element={<FormCreateProfile/>}/>
                        <Route path='profiles/delete' element={<FormDeleteProfile/>}/>
                        <Route path='profiles/update' element={<FormUpdateProfile/>}/>
                        <Route path='users/create' element={<FormCreateUser/>}/>
                        <Route path='user/config' element={<Configuración/>}/>
                        <Route path='deleteUser' element={<FormDeleteUser/>}/>
                        <Route path='users/config/saved' element={<h1>MI LISTA DE GUARDADOS</h1>}/>
                        <Route path='user/config/editUser' element={<FormUpdateUser/>}/>
                        
                        <Route path='user/config/deleteUser' element={<ConfirmDeleteUser/>}/>
                        
                      </Route>
                    
                    </Routes>

                </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
