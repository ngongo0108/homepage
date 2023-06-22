import '../styles/Navigations.scss'
import React from 'react'
import avatar from '../assets/images/7.png'
import image from '../assets/images/Logo.png'
import { FiMail } from 'react-icons/fi'
import { TbBellRinging } from 'react-icons/tb'
const Navigations = () => {
    return (              
        <div className='nav'>
            <div className='navleft'>
                <img className='imgleft' src={image} alt='pc'/>
                <a className='logo' href>                    
                    <span>FPC</span>
                </a>      
            </div>        
            
            <div className='navmiddle'>
                <form>
                    <input className='search' type='search' placeholder='Search Product'/>
                </form>
            </div>
            <div className='navright'>
                <a href className='btn'>
                    <span><FiMail/></span>
                    {/* <span className='badge'>0</span> */}
                </a>
                <a href className='btn'>
                    <span><TbBellRinging/></span>
                    {/* <span className='badge'>0</span> */}
                </a>
                {/* <a href className='btn'> */}
                    <img className='avatar' src={avatar} alt='pc'/>
                {/* </a> */}
            </div>
            {/* <div className='row'>
            <div className='row-md-3'>
                <img className='imgleft' src={image} alt='pc'/>
                <a className='logo' href>                    
                    <span>FPC</span>
                </a>      
            </div>
            <div className='row-md-3'>
                <form>
                    <input className='search' type='search' placeholder='Search Product'/>
                </form>
            </div>
            <div className='row-md-3'>
                <a href className='btn'>
                    <span><FiMail/></span>
                </a>
                <a href className='btn'>
                    <span><TbBellRinging/></span>
                </a>
                <img className='avatar' src={avatar} alt='pc'/>            
            </div>
        </div> */}
        </div>        
    )
}
export default Navigations;