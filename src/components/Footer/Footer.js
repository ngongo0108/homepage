import React from "react";
import './Footer.scss'

import brand1 from '../../assets/images/13.png'
import brand2 from '../../assets/images/14.png'
import brand3 from '../../assets/images/dell.png'
import brand4 from '../../assets/images/Lenovo.png'
import brand5 from '../../assets/images/Apple.png'
import userr from '../../assets/images/userr.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Footer = () =>{
    return (
        <div className='footer'>
            <span className ='epxlore'>Explore Popular Categories</span>
            <span classNamme='seeall'>See all <AiOutlineArrowRight/></span>
            <div className='footerex'>
            <div className='popular'>
                <ul>
                    <li>                    
                    <img src={brand1} alt='acer'/>
                    <img src={brand2} alt='acer'/>
                    <img src={brand3} alt='acer'/>
                    <img src={brand4} alt='acer'/>
                    <img src={brand5} alt='acer'/>
                    
                    </li>
                    <li>
                        <p>Popular top 10 brands</p>
                        <p>5.400+ Orders & reviews</p>
                    </li>
                </ul>                
            </div>
            <div className='newest'>
                <ul>
                    <li>
                    <img src={userr} alt='user'/>
                    </li>
                    <li>
                        <p>Newest Sellers</p>
                        <p>4.600+ Orders & reviews</p>
                    </li>
                </ul>                
            </div>
            </div>
            
        </div>
    )
}
export default Footer