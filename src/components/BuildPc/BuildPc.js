import React from "react";
import './BuildPc.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const BuildPc = () => {
    // const [cpu, setCpu] = useState(false);
    return (
        <div className='CustomPc'>
            <p className='tbCustom'>Custom Pc</p>
            <div className='select'>
                <p className='selectName'>1. CPU</p>
                <p className='selectDt'><span className='icon'><AiOutlinePlusCircle/></span>Select CPU</p>
                
            </div>
            {/* {
                    cpu &&
                    <div id="popup" className="overlay">
                        <div className="card" onClick={e => e.stopPropagation()}>
                            <span>Select CPU</span>
                            
                        </div>
                    </div>
            } */}
            <div className='select'>
                <p className='selectName'>2. Ram</p>
                <p className='selectDt'><span><AiOutlinePlusCircle/></span>Select Ram</p>
            </div>

            <div className='select'>
                <p className='selectName'>3. GPU</p>
                <p className='selectDt'><span><AiOutlinePlusCircle/></span>Select GPU</p>
            </div>

            <div className='select'>
                <p className='selectName'>4. SSD</p>
                <p className='selectDt'><span><AiOutlinePlusCircle/></span>Select SSD hard drive</p>
            </div>

            <div className='select'>
                <p className='selectName'>5. HDD</p>
                <p className='selectDt'><span><AiOutlinePlusCircle/></span>Select HDD hard drive</p>
            </div>

            <div className='select'>
                <p className='select6'>6. CPU Heatsink</p>
                <p className='selectDt'><span><AiOutlinePlusCircle/></span>Select CPU Heatsink</p>
            </div>
            <div>
                <input className = 'buy' type='button' value='Buy now'/>
            </div>
        </div>        
    )
}
export default BuildPc