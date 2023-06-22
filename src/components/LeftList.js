import React from "react";
import '../styles/LeftList.scss'

// import HomeIcon from '@mui/icons-material/Home';
import {BiHomeHeart} from 'react-icons/bi'
import {MdOutlineExplore} from 'react-icons/md'
import {HiComputerDesktop} from 'react-icons/hi2'
import {FiShoppingCart} from 'react-icons/fi'
import {MdPayments} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {TbHistory} from 'react-icons/tb'
import {BiMessageDetail} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";

const LeftList =() => {
        return(
            
            <div className='leftbar'>
                <div className='navbar'>
                    <Link to='/BuildPc'> <BiHomeHeart/>Build PC</Link>
                    <Link to='/'> <HiComputerDesktop className="icon"/>PC Template</Link>
                    <Link to='/Cart'> <FiShoppingCart className="icon"/>Cart</Link>
                    <Link to='/Profile'> <CgProfile className="icon"/>Profle</Link>
                    <Link to='/PurchaseHistory'> <TbHistory className="icon"/>Purchase History</Link>
                    <Link to='/ContactUs'> <BiMessageDetail className="icon"/>Contact us</Link>
                    <Link to='/Settings'> <FiSettings className="icon"/>Settings</Link>
                </div>
                <Link to='/ContactUs'>
                    <div className='helpbtn' >
                        <span><AiOutlinePlusCircle/></span>
                        <p className='needhelp'>Need Help</p>
                        <p>About Acount Management Ordering & Payment refund and FAQ</p>
                        <input type="button" value="Customer Service"/>
                    </div>
                </Link>
                
            </div>          
        )
}
export default LeftList