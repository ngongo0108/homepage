import './App.css';
// import Login from '../components/Login'
import LeftList from '../components/LeftList';
import Navigations from '../components/Navigations';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    // <Login />
    <div>
    <Navigations/>
    <LeftList/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
    </Routes> 
    <Footer/>
    </div>    
  );
}
export default App;
