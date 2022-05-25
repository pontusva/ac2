import {useContext, useState} from 'react';
import {apiContext} from '../../contexts/ApiContext'
import Navbar from '../../Navbar';
import leoPic from '../../assets/zodiacSigns/Leo.png'

const Gemini = () => {

    const {leo, leoTomorrow} = useContext(apiContext);

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }
   

  return (
    <>
        <Navbar />
        <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center'>
            <h1 className='text-center font-anton uppercase text-8xl md:hidden pb-10'>leo</h1>
            <img src={leoPic} alt="/" className='md:pl-10 object-contain w-5/6 h-5/6'/>
            <div className='text-sm text-justify pl-10 pr-10'>
                    <h1 className='text-center font-anton uppercase md:text-8xl text-6xl hidden md:block'>leo</h1>              
                    <span className='font-anton'>Current Date:</span>  {leo.current_date} <br />
                    <span className='font-anton'>Compatibility:</span> {leo.compatibility} <br />
                    <span className='font-anton'>Lucky Number:</span> {leo.lucky_number} <br />
                    <span className='font-anton'>Lucky Time:</span> {leo.lucky_time} <br />
                    <span className='font-anton'>Color:</span>  {leo.color} <br />
                    <span className='font-anton'>Date Range:</span>  {leo.date_range} <br />
                    <span className='font-anton'>Mood:</span>  {leo.mood} <br />
                    <span className='font-anton'>Description:</span>  {leo.description} <br />

                    <div className='pt-10 flex flex-col justify-center'>
                        <p className='uppercase font-anton pb-2 text-center text-2xl'>click the button to show tomorrows horosocpe</p>
                        <button onClick={showMenu} className='border-2 border-black p-3 text-black rounded-full w-full'>Tomorrow</button>
                    </div>

                    <div className={active ? 'visible p-5' : 'hidden'}>
                        
                        <span className='font-anton'>Tomorrow's Date:</span>  {leoTomorrow.current_date} <br />
                        <span className='font-anton'>Compatibility:</span> {leoTomorrow.compatibility} <br />
                        <span className='font-anton'>Lucky Number:</span> {leoTomorrow.lucky_number} <br />
                        <span className='font-anton'>Lucky Time:</span> {leoTomorrow.lucky_time} <br />
                        <span className='font-anton'>Color:</span>  {leoTomorrow.color} <br />
                        <span className='font-anton'>Date Range:</span>  {leoTomorrow.date_range} <br />
                        <span className='font-anton'>Mood:</span>  {leoTomorrow.mood} <br />
                        <span className='font-anton'>Description:</span>  {leoTomorrow.description} <br />
                    </div>
            </div>
        </div>
    </>
  )
}

export default Gemini