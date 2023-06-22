// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import React from 'react'
import './PcTemplate.scss'


import {AiFillStar} from 'react-icons/ai'
import {AiFillPlusCircle} from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { useState } from 'react'
import liPc from '../../assets/images/37.png'
import topPc from '../../assets/images/pc1.png'
// import { pcvalid } from './dbpc'
import pc from '../../assets/images/42.png'
import Modal from '../../model/DetailModel'
const PcTemplate = () => {
    const [openModal, setOpenModal] = useState(false);
    return (        
        <div>
        {/* list product */}                
            <div className = 'row'>
                <div className=' col-md-8'>
                    <h4>PC BUILD IN</h4>
                    <p>See all <AiOutlineArrowRight/></p>
                </div>            
            </div>
            <div className='row'>
            <div data-slick='{"slidesToShow": 3, "slidesToScroll": 3}'>
                {/* {pcvalid.map((avalablePc) => (
                    <div className='col-md-3'>
                    <img className= 'imgPr' src={avalablePc.img} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>{avalablePc.name}</p>
                        <p className='pricePr'>Price {avalablePc.price}</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> {avalablePc.vote}</span>
                            <span><AiFillPlusCircle style={{width:"25px", color: "#009393"}}/></span>
                        </div>                            
                    </div>                        
                </div>
                ))} */}
                
                <div className='col-md-3'>
                    <img className= 'imgPr' src={liPc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>PC Gaming E-Power F1650</p>
                        <p className='pricePr'>Price $349.95</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={topPc} alt='pc'/>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
            </div>
            </div>

            <div className = 'row'>
                <div className=' col-md-8'>
                    <h4>AVAILABLE PC</h4>
                    <p>See all <AiOutlineArrowRight/></p>
                </div>            
            </div>
            <div className='row'>
            <div data-slick='{"slidesToShow": 3, "slidesToScroll": 3}'>
                <div className='col-md-3'>            
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                <div className='col-md-3'>
                    <img className= 'imgPr' src={pc} alt='pc'></img>
                    <div className='contentPr'>
                        <p className='namePr'>123456789</p>
                        <p className='pricePr'>Price $....</p>
                        <div className='iconPr'>
                            <span><AiFillStar style={{width:"25px", color: "#f8e329"}}/> 4.9</span>
                            <button onClick = {() => {setOpenModal(true);}}>Detail</button>
                            { openModal && <Modal closeModel= {setOpenModal} />}
                        </div>                            
                    </div>                        
                </div>
                </div>
                
            </div>      
        </div>        
    )
}
export default PcTemplate