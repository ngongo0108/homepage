import PcTemplate from '../pages/PcTemplate';
import BuildPc from '../pages/BuildPc';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import PurchaseHistory from '../pages/PurchaseHistory';
import ContactUs from '../pages/ContactUs';
import Settings from '../pages/Settings';
import { Routes, Route, } from 'react-router-dom';

const Routter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<PcTemplate/>}></Route>
      </Routes>
      <Routes>
        <Route path="/BuildPc" element={<BuildPc/>}></Route>
      </Routes>
      
      <Routes>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>


      <Routes>
        <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
      
      <Routes>
        <Route path="/PurchaseHistory" element={<PurchaseHistory/>}></Route>
      </Routes>
        
      <Routes>
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
      </Routes>
        
      <Routes>
        <Route path="/Settings" element={<Settings/>}></Route>
      </Routes>
        
    </div>    
  );
}
export default Routter;