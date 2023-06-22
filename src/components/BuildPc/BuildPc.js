import React from "react";
import './BuildPc.scss'

import { useState } from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
// import pc from '../../assets/images/42.png'
import corei3 from '../../assets/images/1.png'
import { Link } from "react-router-dom";

const BuildPc = (product) => {
    // const [cpu, setCpu] = useState(false);
    // 
    const handleAddConfig =() =>{
        alert("add success");
    }
    const handleBuy =() =>{
        alert("go to cart");
    }

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
        <div className='CustomPc'>
        {/* popup */}
        <div id='popup1' className='overlay' >        
                <div className='popup' >
                    <div className='navhead'>
                        <p>Select CPU</p>
                        <form>
                            <input className='search' type='search' placeholder='Search Product'/>
                        </form>
                        <a className='close' href='#'>&times;</a>
                    </div>
                    <div className='contentPr'>
                        <div className='catepr'>
                            <p>Category</p>
                            <p>Intel Core i3</p>
                            <p>Intel Core i3</p>
                            <p>Intel Core i3</p>
                            <p>Intel Core i3</p>
                        </div>                                        
                        <div className='product'>
                            <div >
                            <img className='imgPr' src={corei3} alt='PC'/>
                            </div>                            
                            <div className='contentCp'>
                            <div>
                                <span className="nameCp">CPU Intel Core i3-10105F (3.7GHx turbo 4.4GHz | 4 Nhân 8 Luồng | 6 MB Cache | 65W )</span>
                                <p>
                                    <span className="starvote"><AiFillStar/></span>
                                    <span className="starvote"><AiFillStar/></span>
                                    <span className="starvote"><AiFillStar/></span>
                                    <span className="starvote"><AiFillStar/></span>
                                    <span className="starvote"><AiFillStar/></span>
                                    <span className="Reviews">(2000+ Reviews)</span>
                                </p>
                                <p className='detail'>RY2Zen 3 3200G/ A320M/ 8GB/ 120GB</p>
                            </div>  
                            <div className='price-quantity'>
                                <p className='price'>Price $ 200.00</p>
                                <div className="quantity-selector">                            
                                    <button className="quantity-btn decrease-btn" onClick={(event)=>{decreaseQuantity(event)}}>-</button>
                                    <input className="quantity-input" type='number' value={quantity} onChange={(event)=>{handleInputChange(event)}} />
                                    <button className="quantity-btn increase-btn" onClick={(event)=>{increaseQuantity(event)}}>+</button>
                                </div>
                            </div>    
                            
                            <div className='btnadd'>
                                <input className = 'add' onClick={()=>handleAddConfig()} type='button' value='Add to config'/>
                                
                            </div>                
                            </div>  
                        </div> 
                    </div>
                                       
                </div>
            </div>


            <p className='tbCustom'>Custom Pc</p>
            <div className='select'>
                <p className='selectName'>1. CPU</p>
                <a className='selectDt' href='#popup1' id='openPopUp'style={{color: 'white'}}>
                    <span ><AiOutlinePlusCircle/></span>
                    Select CPU
                </a>
            </div>

            <div className='select'>
                <p className='selectName'>2. Ram</p>
                <a className='selectDt' href='#popup1' id='openPopUp'style={{color: 'white'}}>
                <span><AiOutlinePlusCircle/></span>
                Select Ram
                </a>                
            </div>

            <div className='select'>
                <p className='selectName'>3. GPU</p>
                <a className='selectDt' href='#popup1' id='openPopUp'style={{color: 'white'}}>
                <span><AiOutlinePlusCircle/></span>
                Select GPU
                </a>
            </div>

            <div className='select'>
                <p className='selectName'>4. SSD</p>
                <a className='selectDt' href='#popup1' id='openPopUp'style={{color: 'white'}}>
                <span><AiOutlinePlusCircle/></span>
                Select SSD hard drive
                </a>
            </div>

            <div className='select'>
                <p className='selectName'>5. HDD</p>
                <a className='selectDt' href='#popup1' id='openPopUp'style={{color: 'white'}}>
                <span><AiOutlinePlusCircle/></span>
                Select HDD hard drive
                </a>
            </div>

            <div className='select'>
                <p className='select6'>6. CPU Heatsink</p>
                <a className='selectDt' href='#popup1' id='openPopUp'style={{color: 'white'}}>
                <span><AiOutlinePlusCircle/></span>
                Select CPU Heatsink
                </a>
            </div>
            
            <div>
                <Link to='/Cart'>
                    <input className = 'buy' onClick={()=>handleBuy()} type='button' value='Buy now'/>
                </Link>                
            </div>
        </div>        
    )
}
export default BuildPc