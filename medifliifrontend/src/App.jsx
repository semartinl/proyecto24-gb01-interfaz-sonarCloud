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
import FormCreateUser from './Components/Users/FormCreateUsers';
import FormDeleteUser from './Components/Users/FormDeleteUsers';
import FormUpdateUser from './Components/Users/FormUpdateUsers';


function App() {
  
  return (
    <BrowserRouter>
                  <Header />
                    
                    
                
                    <Routes>
                        {/* <Route path="/" element={<Index/>} /> */}
                        <Route path='/app'>
                    
                        {/* <Route path="/search" element={<PagBusqueda/>} /> */}
                </Route>

                    
                        <Route path='/app'>
                        
                        <Route path="login" element={<LogIn />} /> 
                        <Route path="languages" element={<Language />} > 
                        </Route>
                        <Route path="profiles" element={<Profile />} > 
                        </Route>
                        <Route path="users" element={<Users />} > 
                        </Route>
                        <Route path='languages/create' element={<FormCreateLanguage/>}/>
                        <Route path='languages/delete' element={<FormDeleteLanguage/>}/>
                        <Route path='languages/update' element={<FormUpdateLanguage/>}/>
                        <Route path='profiles/create' element={<FormCreateProfile/>}/>
                        <Route path='profiles/delete' element={<FormDeleteProfile/>}/>
                        <Route path='profiles/update' element={<FormUpdateProfile/>}/>
                        <Route path='users/create' element={<FormCreateUser/>}/>
                        <Route path='users/delete' element={<FormDeleteUser/>}/>
                        <Route path='users/update' element={<FormUpdateUser/>}/>
                        <Route path="signup" element={<SignUp/>} /> 
                        </Route>
                        
                    </Routes>

                </BrowserRouter>
  );
}

export default App;
