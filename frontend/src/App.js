
import './App.css';
// import ForgotPasssword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPasssword from './components/Auth/ForgotPassword';
import {createBrowserRouter,Routes,Route, BrowserRouter} from 'react-router-dom';
import NewsLetter from './components/newsletter/Newsletter';
import Update from './components/newsletter/Update';
import Ngo from './Ngo'
// import PrincipalLayout from  './PrincipalLayout'
import Game from './components/game/game'
function App() {
  return (
    <div>
      <Game/>
    </div>



    
  );
}

export default App
