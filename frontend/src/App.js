import logo from './logo.svg';
import './App.css';
// import ForgotPasssword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPasssword from './components/Auth/ForgotPassword';
import {createBrowserRouter,Routes,Route, BrowserRouter} from 'react-router-dom';
import NewsLetter from './components/newsletter/Newsletter';
import Update from './components/newsletter/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NewsLetter/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot' element={<ForgotPasssword/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>



    
  );
}

export default App;
