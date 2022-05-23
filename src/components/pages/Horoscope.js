import React from 'react'
import aquarius from '../assets/zodiacSigns/Aquarius.png'
import aries from '../assets/zodiacSigns/Aries.png'
import taurus from '../assets/zodiacSigns/Taurus.png'
import gemini from '../assets/zodiacSigns/Gemini.png'
import cancer from '../assets/zodiacSigns/Cancer.png'
import capricorn from '../assets/zodiacSigns/Capricorn.png'
import leo from '../assets/zodiacSigns/Leo.png'
import libra from '../assets/zodiacSigns/Libra.png'
import sagittarius from '../assets/zodiacSigns/Sagittarius.png'
import scorpius from '../assets/zodiacSigns/Scorpius.png'
import virgo from '../assets/zodiacSigns/Virgo.png'
import pisces from '../assets/zodiacSigns/Pisces.png'
import {Link} from 'react-router-dom';

import Navbar from '../Navbar'




const Horoscope = () => {
  return (
    <>
        <Navbar />
        <div className='fixed z-10 text-center w-full font-anton tracking-wide text-2xl h-0 pt-5'>
                <p>Click to read todays horoscope...</p>
        </div>
        <div className=' bg-zinc-50 grid grid-cols-4 p-24 justify-items-center bg-cover bg-center fixed w-screen h-screen'>
            
            <div className=''> 
                <p className=' text-center font-bold text-xl'>Aquarius</p>
                <Link to='/aquarius'><img src={aquarius} alt="" className='w-36 h-36 object-contain '   /></Link>  
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Aries</p> 
               <Link to='/aries'><img src={aries} alt="" className='w-36 h-36 object-contain '  /></Link> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Cancer</p> 
               <Link to='/cancer'><img src={cancer} alt="" className='w-36 h-36 object-contain'  /></Link>  
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Capricorn</p> 
                <Link to='/capricorn'><img src={capricorn} alt="" className='w-36 h-36 object-contain'  /></Link> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Gemini</p> 
                <img src={gemini} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Leo</p> 
                <img src={leo} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Libra</p> 
                <img src={libra} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Pisces</p> 
                <img src={pisces} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Sagittarius</p> 
                <img src={sagittarius} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Scorpio</p> 
                <img src={scorpius} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div> 
                <p className='text-center font-bold text-xl'>Taurus</p>
                <img src={taurus} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center font-bold text-xl'>Virgo</p> 
                <img src={virgo} alt="" className='w-36 h-36 object-contain'  /> 
            </div>
        </div>
    </>
  )
}

export default Horoscope