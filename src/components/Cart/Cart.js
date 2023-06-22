import React from "react";
import './Cart.scss'
import pc from '../../assets/images/pc.jpg'
import pm1 from '../../assets/images/pm1.jpg'
import pm2 from '../../assets/images/pm2.png'
const Purchase = () => {
    return (
        <div className='purchasePage'>
            <div className='customerInfor'>
                <div class="nameTable">
                    <h4>Customer Information</h4>
                </div>
                <form class="container">
                    <p>
                        <label>Full Name</label>
                        <input class="input" type="text"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input class="input" type="text"/>
                    </p>
                    <p>
                        <label>Phone</label>
                        <input class="input" type="text"/>
                    </p>
                    <p>
                        <label>Address</label>
                        <input class="input" type="text"/>
                    </p>
                </form>
            </div>   
            <div className='Pcpayment'>
                <div className='inforPc'>
                    <img className='imgpc' src={pc} alt='paypal'/>
                    <div className='contentPc'>
                        <p>PC Gaming E-Power F1650</p>
                        <p>Core i3 10105F / Ram 16 GB / RTX A2000 6 GB/ SSD 500GB / HDD ITB / ARGB 3INI</p>
                    </div>
                    <div className='price'>
                        <del>$12200</del>
                        <span>$1080</span>
                    </div>                    
                </div>
                <hr></hr>
                <div className='payment'>
                    <h4>Payment method</h4>
                    <div className='imgPm'>
                        <img className='im' src={pm1} alt='paypal'/>
                        <img className='im' src={pm2} alt='paypal'/>
                    </div>  
                    <a href='#popup1' id='openPopUp'style={{color: 'white'}}>Confirm</a>   
                </div>  

            </div>     
            <div id='popup1' className='overlay' >        
                <div className='popup' >   
                aaaa                                    
                </div>
            </div>             
        </div>
    )
}
export default Purchase