// import { Route } from 'react-router';
import { NavLink, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import OwnCabinetContainer from './components/OwnCabinet/OwnCabinetContainer';
import LoginPage from './components/LoginPage/LoginPage';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (

    
      <div className="App">
        <div className='container'>
        <HeaderContainer/>
        </div>
        <Routes>
          <Route path="/owncabinet" element={<OwnCabinetContainer/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </div>





  );
}

export default App;
