import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LogIn from './Views/login';
import SignUp from './Views/SignUp';
import Header from './Components/Header';
import Profile from './Views/Estadistica/Profile';
import FormCreateProfile from './Components/Profiles/FormCreateProfile';
import FormDeleteProfile from './Components/Profiles/FormDeleteProfile';
import FormUpdateProfile from './Components/Profiles/FormUpdateProfile';

function App() {
  
  return (
    <BrowserRouter>
                  <Header />
                    
                    
                
                    <Routes>
                        {/* <Route path="/" element={<Index/>} /> */}
                        <Route path='/app'>
                    
                        {/* <Route path="/search" element={<PagBusqueda/>} /> */}
                        <Route path="login" element={<LogIn />} /> 
                        <Route path="profiles" element={<Profile />} > 
                        </Route>
                        <Route path='profiles/create' element={<FormCreateProfile/>}/>
                        <Route path='profiles/delete' element={<FormDeleteProfile/>}/>
                        <Route path='profiles/update' element={<FormUpdateProfile/>}/>
                        <Route path="signup" element={<SignUp/>} />
                        </Route>
                    </Routes>

                </BrowserRouter>
  );
}

export default App;
