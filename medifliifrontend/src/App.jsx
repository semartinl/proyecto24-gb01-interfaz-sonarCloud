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
                        <Route path='languages/create' element={<FormCreateLanguage/>}/>
                        <Route path='languages/delete' element={<FormDeleteLanguage/>}/>
                        <Route path='languages/update' element={<FormUpdateLanguage/>}/>
                        <Route path="signup" element={<SignUp/>} /> 
                        </Route>
                        
                    </Routes>

                </BrowserRouter>
  );
}

export default App;
