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

import Navbar from '../Navbar'




const Horoscope = () => {
  return (
    <>
        <Navbar />
        <div className='fixed z-10 text-center w-full font-anton tracking-wide text-2xl h-0 pt-5'>
                <p>Click to read todays horoscope...</p>
        </div>
        <div className='grid grid-cols-4 p-24 justify-items-center bg-cover bg-center fixed w-screen h-screen'>
            
            <div className=''> 
                <p className=' text-center'>Aquarius</p>
                <img src={aquarius} alt="" className='w-36 h-36 object-contain '   /> 
            </div>

            <div>
                <p className='text-center'>Aries</p> 
                <img src={aries} alt="" className='w-36 h-36 object-contain '  /> 
            </div>

            <div>
                <p className='text-center'>Cancer</p> 
                <img src={cancer} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Capricorn</p> 
                <img src={capricorn} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Gemini</p> 
                <img src={gemini} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Leo</p> 
                <img src={leo} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Libra</p> 
                <img src={libra} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Pisces</p> 
                <img src={pisces} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Sagittarius</p> 
                <img src={sagittarius} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Scorpio</p> 
                <img src={scorpius} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div> 
                <p className='text-center'>Taurus</p>
                <img src={taurus} alt="" className='w-36 h-36 object-contain'  /> 
            </div>

            <div>
                <p className='text-center'>Virgo</p> 
                <img src={virgo} alt="" className='w-36 h-36 object-contain'  /> 
            </div>
        </div>
    </>
  )
}

export default Horoscope