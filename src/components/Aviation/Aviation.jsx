import React from 'react';
import './aviation.css';
import turbine from '../Aviation/helment-drawing.jpg';
import responsibility from '../../assets/honesty.png'
import excellence from '../../assets/service.png'
import resultoriented from '../../assets/business.png'
import integrity from '../../assets/outstanding..png'
import safety from '../../assets/helment.png'

const Aviation = () => {
  return (
    <div className='w-full flex flex-col flex-wrap items-center justify-center px-10 py-10'>
        <h1 className='uppercase flex items-center justify-center text-center text-4xl font-bold  text-[#20206b]'>Our core values</h1>

            <div className='divider'></div>

        <div className='flex flex-wrap items-center justify-center text-[#20206b] gap-6'>
            <div className='card w-[300px] h-[300px] px-10 flex flex-col items-center justify-center border-1 shadow-xl'>
                <span>
                    <img src={responsibility} className='w-32' alt="" />
                </span>
                <span className='uppercase text-2xl '>Responsibility</span>
            </div>
            <div  className='card w-[300px] h-[300px] px-10 flex flex-col items-center justify-center border-1 shadow-xl'>
                <span>
                    <img src={ excellence } className='w-32' alt="" />
                </span>
                <span className='uppercase text-2xl'>Excellence</span>
            </div>
            <div   className='card w-[300px] h-[300px] px-10 flex flex-col items-center justify-center border-1 shadow-xl'>
                <span>
                    <img src={ resultoriented }  className='w-32' alt="" />
                </span>
                <span  className='uppercase text-2xl'>Result oriented</span>
            </div>
            <div   className='card w-[300px] h-[300px] px-10 flex flex-col items-center justify-center border-1 shadow-xl'>
                <span>
                    <img src={ integrity } className='w-32' alt="" />
                </span>
                <span  className='uppercase text-2xl'>Integrity</span>
            </div >
            <div   className='card w-[300px] h-[300px] px-10 flex flex-col items-center justify-center border-1 shadow-xl'>
                <span>
                    <img src={ safety } className='w-32'  alt="" />
                </span>
                <span className='uppercase text-2xl'>Safety</span>
            </div>
        </div>
    </div>
  )
}

export default Aviation