import logo from './logo.svg';
import './App.css';
import NgosPage from './NgosPage';
import NgoNav from './NgoNav';
import {Routes,Route, BrowserRouter} from 'react-router-dom';




function App() {
  return (
    <div>
      {/* <NgoNav/> */}
      <NgosPage/>
      {/* <Routes>
                    <Route path="/" element={<NgosPage />} />
                    
                    
       </Routes> */}
    </div>
  );
}

export default App;
