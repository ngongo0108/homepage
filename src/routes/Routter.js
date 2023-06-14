import PcTemplate from '../pages/PcTemplate';
import BuildPc from '../pages/BuildPc';
import Explore from '../pages/Explore';
import Cart from '../pages/Cart';
import Selling from '../pages/Selling';
import Profile from '../pages/Profile';
import PurchaseHistory from '../pages/PurchaseHistory';
import ContactUs from '../pages/ContactUs';
import Settings from '../pages/Settings';
import { Routes, Route, } from 'react-router-dom';

const Routter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BuildPc/>}></Route>
      </Routes>
      <Routes>
        <Route path="/PcTemplate" element={<PcTemplate/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Explore" element={<Explore/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>

      <Routes>
        <Route path="/Selling" element={<Selling/>}></Route>
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