import React from "react";
import '../styles/Footer.scss'

const Footer = () =>{
    return (
        <div className='footer'>
            <span className ='epxlore'>Explore Popular Categories</span>
            <span classNamme='seeall'>See all</span>
            <div className='footerex'>
            <div className='popular'>
                <ul>
                    <li>
                    <img src='' alt='acer'/>
                    <img src='' alt='acer'/>
                    <img src='' alt='acer'/>
                    <img src='' alt='acer'/>
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
                    <img src='' alt='user'/>
                    <img src='' alt='user'/>
                    <img src='' alt='user'/>
                    <img src='' alt='user'/>
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