import {React, useEffect, useState} from 'react'
import cancer from '../../assets/zodiacSigns/Cancer.png'
import axios from 'axios';
import Navbar from '../../Navbar';

const Cancer = () => {

    const [cancerSign, setCancerSign] = useState([]); 
    const [cancerTomorrow, setCancerTomorrow] = useState([]); 
    
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=today')
        .then((response) => {
            setCancerSign(response.data)            
        })               
    }, [])

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=tomorrow')
        .then((response) => {
            console.log(response.data)
            setCancerTomorrow(response.data)            
        })               
    }, [])

  return (
    <>
        <Navbar />
        <div className='grid grid-cols-2 bg-zinc-50 fixed h-full w-full '>
            <img src={cancer} alt="/" className='pl-10'/>
            <div className='text-md text-justify pl-10 pr-10'>
            <h1 className='text-center font-anton uppercase text-8xl'>cancer</h1>                     
                    <span className='font-anton'>Current Date:</span>  {cancerSign.current_date} <br />
                    <span className='font-anton'>Compatibility:</span> {cancerSign.compatibility} <br />
                    <span className='font-anton'>Lucky Number:</span> {cancerSign.lucky_number} <br />
                    <span className='font-anton'>Lucky Time:</span> {cancerSign.lucky_time} <br />
                    <span className='font-anton'>Color:</span>  {cancerSign.color} <br />
                    <span className='font-anton'>Date Range:</span>  {cancerSign.date_range} <br />
                    <span className='font-anton'>Mood:</span>  {cancerSign.mood} <br />
                    <span className='font-anton'>Description:</span>  {cancerSign.description} <br />

                    <div className='pt-10 flex flex-col justify-center'>
                        <p className='uppercase font-anton pb-2 text-center text-2xl'>click the button to show tomorrows horosocpe</p>
                        <button onClick={showMenu} className='border-2 border-black p-3 text-black rounded-full w-full'>Tomorrow</button>
                    </div>

                    <div className={active ? 'visible p-5' : 'hidden'}>
                        
                        <span className='font-anton'>Tomorrow's Date:</span>  {cancerTomorrow.current_date} <br />
                        <span className='font-anton'>Compatibility:</span> {cancerTomorrow.compatibility} <br />
                        <span className='font-anton'>Lucky Number:</span> {cancerTomorrow.lucky_number} <br />
                        <span className='font-anton'>Lucky Time:</span> {cancerTomorrow.lucky_time} <br />
                        <span className='font-anton'>Color:</span>  {cancerTomorrow.color} <br />
                        <span className='font-anton'>Date Range:</span>  {cancerTomorrow.date_range} <br />
                        <span className='font-anton'>Mood:</span>  {cancerTomorrow.mood} <br />
                        <span className='font-anton'>Description:</span>  {cancerTomorrow.description} <br />
                    </div>
            </div>
        </div>

    </>
  )
}

export default Cancer