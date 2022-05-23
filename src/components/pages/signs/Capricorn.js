import {React, useEffect, useState} from 'react'
import capricorn from '../../assets/zodiacSigns/Capricorn.png'
import axios from 'axios';
import Navbar from '../../Navbar';

const Capricorn = () => {

    const [capricornSign, setCapricornSign] = useState([]); 
    const [capricornTomorrow, setCapricornTomorrow] = useState([]); 
    
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=today')
        .then((response) => {
            setCapricornSign(response.data)            
        })               
    }, [])

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=tomorrow')
        .then((response) => {
            console.log(response.data)
            setCapricornTomorrow(response.data)            
        })               
    }, [])

  return (
    <>
        <Navbar />
        <div className='grid grid-cols-2 bg-zinc-50 fixed h-full w-full '>
            <img src={capricorn} alt="/" className='pl-10'/>
            <div className='text-md text-justify pl-10 pr-10'>
            <h1 className='text-center font-anton uppercase text-8xl'>cancer</h1>                     
                    <span className='font-anton'>Current Date:</span>  {capricornSign.current_date} <br />
                    <span className='font-anton'>Compatibility:</span> {capricornSign.compatibility} <br />
                    <span className='font-anton'>Lucky Number:</span> {capricornSign.lucky_number} <br />
                    <span className='font-anton'>Lucky Time:</span> {capricornSign.lucky_time} <br />
                    <span className='font-anton'>Color:</span>  {capricornSign.color} <br />
                    <span className='font-anton'>Date Range:</span>  {capricornSign.date_range} <br />
                    <span className='font-anton'>Mood:</span>  {capricornSign.mood} <br />
                    <span className='font-anton'>Description:</span>  {capricornSign.description} <br />

                    <div className='pt-10 flex flex-col justify-center'>
                        <p className='uppercase font-anton pb-2 text-center text-2xl'>click the button to show tomorrows horosocpe</p>
                        <button onClick={showMenu} className='border-2 border-black p-3 text-black rounded-full w-full'>Tomorrow</button>
                    </div>

                    <div className={active ? 'visible p-5' : 'hidden'}>
                        
                        <span className='font-anton'>Tomorrow's Date:</span>  {capricornTomorrow.current_date} <br />
                        <span className='font-anton'>Compatibility:</span> {capricornTomorrow.compatibility} <br />
                        <span className='font-anton'>Lucky Number:</span> {capricornTomorrow.lucky_number} <br />
                        <span className='font-anton'>Lucky Time:</span> {capricornTomorrow.lucky_time} <br />
                        <span className='font-anton'>Color:</span>  {capricornTomorrow.color} <br />
                        <span className='font-anton'>Date Range:</span>  {capricornTomorrow.date_range} <br />
                        <span className='font-anton'>Mood:</span>  {capricornTomorrow.mood} <br />
                        <span className='font-anton'>Description:</span>  {capricornTomorrow.description} <br />
                    </div>
            </div>
        </div>

    </>
  )
}

export default Capricorn