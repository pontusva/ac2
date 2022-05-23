import {React, useEffect, useState} from 'react'
import Navbar from '../../Navbar';
import ariespic from '../../assets/zodiacSigns/Aries.png'
import axios from 'axios';


const Aries = () => {

    const [aries, setAries] = useState([]); 
    const [ariesTomorrow, setAriesTomorrow] = useState([]); 
    
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aries&day=today')
        .then((response) => {
            setAries(response.data)            
        })               
    }, [])

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aries&day=tomorrow')
        .then((response) => {
            console.log(response.data)
            setAriesTomorrow(response.data)            
        })               
    }, [])


  return (
    <>
        <Navbar />
        <div className='grid grid-cols-2 bg-zinc-50 fixed h-full w-full content-center'>
            <img src={ariespic} alt="/" className='pl-10'/>
            <div className='text-md text-justify pl-10 pr-10'>
            <h1 className='text-center font-anton uppercase text-8xl'>aries</h1>                     
                    <span className='font-anton'>Current Date:</span>  {aries.current_date} <br />
                    <span className='font-anton'>Compatibility:</span> {aries.compatibility} <br />
                    <span className='font-anton'>Lucky Number:</span> {aries.lucky_number} <br />
                    <span className='font-anton'>Lucky Time:</span> {aries.lucky_time} <br />
                    <span className='font-anton'>Color:</span>  {aries.color} <br />
                    <span className='font-anton'>Date Range:</span>  {aries.date_range} <br />
                    <span className='font-anton'>Mood:</span>  {aries.mood} <br />
                    <span className='font-anton'>Description:</span>  {aries.description} <br />

                    <div className='pt-10 flex flex-col justify-center'>
                        <p className='uppercase font-anton pb-2 text-center text-2xl'>click the button to show tomorrows horosocpe</p>
                        <button onClick={showMenu} className='border-2 border-black p-3 text-black rounded-full w-full'>Tomorrow</button>
                    </div>

                    <div className={active ? 'visible p-5' : 'hidden'}>
                        
                        <span className='font-anton'>Tomorrow's Date:</span>  {ariesTomorrow.current_date} <br />
                        <span className='font-anton'>Compatibility:</span> {ariesTomorrow.compatibility} <br />
                        <span className='font-anton'>Lucky Number:</span> {ariesTomorrow.lucky_number} <br />
                        <span className='font-anton'>Lucky Time:</span> {ariesTomorrow.lucky_time} <br />
                        <span className='font-anton'>Color:</span>  {ariesTomorrow.color} <br />
                        <span className='font-anton'>Date Range:</span>  {ariesTomorrow.date_range} <br />
                        <span className='font-anton'>Mood:</span>  {ariesTomorrow.mood} <br />
                        <span className='font-anton'>Description:</span>  {ariesTomorrow.description} <br />
                    </div>
            </div>
        </div>
    </>
  )
}

export default Aries