import React from 'react';
import { Link } from "react-router-dom";
import './DetailModal.scss'
// import ReactDOM from 'react-dom';
import modalPc from '../../src/assets/images/PC.png'
const Modal = ({closeModel}) => {
    return (
        <div className='modalBackground'>
            <div className='modelContainer'>
                <div className='closebtn'>
                    <button onClick = {() => {closeModel(false)}}>X</button>
                </div>
                    
                <div className='modalBody'>
                    <div className= 'imgP'>
                        <img src={modalPc} alt='pc'/>
                    </div>
                    <div className='content'>
                        <h4 className='namePc'>PC Doi Moi</h4>
                        <p>CPU</p>
                        <p>RAM</p>
                        <p>GPU</p>
                        <p>SSD hard drive</p>
                        <p>HDD hard drive</p>
                        <p>CPU Heatsink hard drive</p>
                    </div>
                    
                </div>

                <div className='footer'>
                    <button id='canceBtn'onClick = {() => {closeModel(false)}}>Cancel</button>
                        <Link to='/cart'>
                            <button>Buy now</button>
                        </Link>                    
                </div>
            </div>        
        </div>
    )
}
export default Modal;