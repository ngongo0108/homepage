import '../styles/Navigations.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import {Icon } from 'react-materialize'

// import EmailIcon from '@mui/icons-material/Email';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Navigations = () => {
    return (               
        <div className='nav'>
            <div className='navleft'>
                <img className='imgleft' src='./assets/img/logo.jpg' alt='pc'/>
                <a className='logo' href>                    
                    <span>PC</span> E-Commerce
                </a>                
            </div>
            <div className='navmiddle'>
                <form>
                    <input className='search' type='search' placeholder='Search Product'/>
                </form>
            </div>
            <div className='navright'>
                <a href className='btn'>
                    {/* <EmailIcon/> */}
                    {/* <span className='badge'>0</span> */}
                </a>
                <a href className='btn'>
                    {/* <NotificationsActiveIcon/> */}
                    {/* <span className='badge'>0</span> */}
                </a>
                <a href className='btn'>
                    {/* <NotificationsActiveIcon/> */}
                    <img scr='' alt='pc'/>
                </a>
            </div>
        </div>
    )
}
export default Navigations;