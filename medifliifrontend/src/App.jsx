import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LogIn from './Views/login';
import SignUp from './Views/SignUp';
import Header from './Components/Header';

function App() {
  
  return (
    <BrowserRouter>
                  <Header />
                    
                    
                
                    <Routes>
                        {/* <Route path="/" element={<Index/>} /> */}
                    
                    
                        {/* <Route path="/search" element={<PagBusqueda/>} /> */}
                    
                        
                        <Route path="/login" element={<LogIn />} /> 
                        <Route path="/signup" element={<SignUp/>} /> 
                        
                    </Routes>

                </BrowserRouter>
  );
}

export default App;
