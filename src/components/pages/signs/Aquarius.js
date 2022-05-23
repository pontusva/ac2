import {React, useEffect, useState} from 'react'
import Navbar from '../../Navbar';
import aquarius from '../../assets/zodiacSigns/Aquarius.png'
import axios from 'axios';


const Aquarius = () => {

    const [aqua, setAqua] = useState([]); 
    const [aquaTomorrow, setAquaTomorrow] = useState([]); 
    
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=today')
        .then((response) => {
            setAqua(response.data)            
        })               
    }, [])

    useEffect(() => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=tomorrow')
        .then((response) => {
            console.log(response.data)
            setAquaTomorrow(response.data)            
        })               
    }, [])


  return (
    <>
        <Navbar />
        <div className='grid grid-cols-2 bg-zinc-50 fixed h-full w-full content-center pb-24'>
            <img src={aquarius} alt="/" className='pl-10'/>
            <div className='text-md text-justify pl-10 pr-10'>
            <h1 className='text-center font-anton uppercase text-8xl'>aquarius</h1>                     
                    <span className='font-anton'>Current Date:</span>  {aqua.current_date} <br />
                    <span className='font-anton'>Compatibility:</span> {aqua.compatibility} <br />
                    <span className='font-anton'>Lucky Number:</span> {aqua.lucky_number} <br />
                    <span className='font-anton'>Lucky Time:</span> {aqua.lucky_time} <br />
                    <span className='font-anton'>Color:</span>  {aqua.color} <br />
                    <span className='font-anton'>Date Range:</span>  {aqua.date_range} <br />
                    <span className='font-anton'>Mood:</span>  {aqua.mood} <br />
                    <span className='font-anton'>Description:</span>  {aqua.description} <br />

                    <div className='pt-10 flex flex-col justify-center'>
                        <p className='uppercase font-anton pb-2 text-center text-2xl'>click the button to show tomorrows horosocpe</p>
                        <button onClick={showMenu} className='border-2 border-black p-3 text-black rounded-full w-full'>Tomorrow</button>
                    </div>

                    <div className={active ? 'visible p-5' : 'hidden'}>
                        
                        <span className='font-anton'>Tomorrow's Date:</span>  {aquaTomorrow.current_date} <br />
                        <span className='font-anton'>Compatibility:</span> {aquaTomorrow.compatibility} <br />
                        <span className='font-anton'>Lucky Number:</span> {aquaTomorrow.lucky_number} <br />
                        <span className='font-anton'>Lucky Time:</span> {aquaTomorrow.lucky_time} <br />
                        <span className='font-anton'>Color:</span>  {aquaTomorrow.color} <br />
                        <span className='font-anton'>Date Range:</span>  {aquaTomorrow.date_range} <br />
                        <span className='font-anton'>Mood:</span>  {aquaTomorrow.mood} <br />
                        <span className='font-anton'>Description:</span>  {aquaTomorrow.description} <br />
                    </div>
            </div>
        </div>
    </>
  )
}

export default Aquarius