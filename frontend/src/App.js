import logo from './logo.svg';
import './App.css';
// import ForgotPasssword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPasssword from './components/Auth/ForgotPassword';
import {createBrowserRouter,Routes,Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot' element={<ForgotPasssword/>}/>
    </Routes>
    </BrowserRouter>



    
  );
}

export default App;
