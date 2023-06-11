// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import React from 'react'
import '../styles/Home.scss'
import { useState } from 'react'

const Home = () => {
    const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = (event) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else setQuantity(0);
    event.preventDefault();
  };

  const increaseQuantity = (event) => {
    setQuantity(quantity + 1);
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
    event.preventDefault();
  };
    return (
        <div>
            <div className='topProduct'>
            <form>
                <img className='imgTopPr' scr='assets/img/2.png' alt='PC'/>
                <div className='PCcontent'>
                    <div>
                        <span className="PC-Gaming-E-Power-F1650">PC Gaming E-Power F1650</span>
                        <p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="Reviews">(2000+ Reviews)</span>
                        </p>
                        <p className="RYZEN-3-3200G-A320M-8GB-120GB">RY2Zen 3 3200G/ A320M/ 8GB/ 120GB</p>
                        <p className='price'>Price $ 349.95</p>
                    </div>              
                    <div className='chooseColor'>
                        <label className='Color'>Color</label>
                        <input type='color' id='favcolor' name='blue' value='#4BA3E5'/>
                        <input type='color' id='favcolor' name='bluegreen' value='#00AD97'/>
                        <input type='color' id='favcolor' name='pink' value='#E27373'/>
                        <input type='color' id='favcolor' name='green' value='#75E573'/>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease-btn" onClick={(event)=>{decreaseQuantity(event)}}>-</button>
                            <input className="quantity-input" type='number' value={quantity} onChange={(event)=>{handleInputChange(event)}} />
                            <button className="quantity-btn increase-btn" onClick={(event)=>{increaseQuantity(event)}}>+</button>
                        </div>
                    </div>
                    <div>
                        <input className = 'heart' type='button' value='heart'/>
                        <input className = 'add' type='button' value='Add to cart'/>
                        <input className = 'buy' type='button' value='Buy now'/>
                    </div>
                
                </div>                
            </form>  
        </div>
        
        {/* banner right */}
        <div className='bannerright'>
            <img src='' alt=''/>
            <span>Summer PC from top brands</span>
            <p>Buy it now</p>
        </div>
        
        {/* list product */}
        <div className='listPr'>
            <ul>
                <li>
                    <img src='' alt='pc'></img>
                    <span>123456789</span>
                    <p>Price $....</p>
                    <span className='start'>start 4.9</span>
                    <span className='icon'>icon</span>
                </li>
                <li>
                    <img src='' alt='pc'></img>
                    <span>123456789</span>
                    <p>Price $....</p>
                    <span className='start'>start 4.9</span>
                    <span className='icon'>icon</span>
                </li>
                <li>
                    <img src='' alt='pc'></img>
                    <span>123456789</span>
                    <p>Price $....</p>
                    <span className='start'>start 4.9</span>
                    <span className='icon'>icon</span>
                </li>
                <li>
                    <img src='' alt='pc'></img>
                    <span>123456789</span>
                    <p>Price $....</p>
                    <span className='start'>start 4.9</span>
                    <span className='icon'>icon</span>
                </li>
            </ul>
        </div>

        {/* daily deals */}
        <div className='dailyDeals'>
            <span>Daily Deals</span>
            <span>View all</span>
            <div>
                <ul>
                    <li className ='listright'>
                        <img className='listImg' src='' alt='pc'></img>
                        <span>
                            <p className='name'>123456789</p>
                            <p className='review'>...reviews .... orders</p>
                        </span>                        
                        <span className='price'>Price $....</span>
                        
                    </li>
                    <li className ='listright'> 
                        <img className='listImg' src='' alt='pc'></img>
                        <span>
                            <p className='name'>123456789987456321</p>
                            <p className='review'>...reviews .... orders</p>
                        </span>                        
                        <span className='price'>Price $....</span>
                    </li>
                </ul>
            </div>
        </div>
        
        </div>
        
    )
}
export default Home