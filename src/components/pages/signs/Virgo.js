import {useContext, useState} from 'react';
import {apiContext} from '../../contexts/ApiContext'
import Navbar from '../../Navbar';
import virgoPic from '../../assets/zodiacSigns/Virgo.png'



const Virgo = () => {
    const {virgo, virgoTomorrow} = useContext(apiContext);
     
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

  return (
    <>
        <Navbar />
        <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center'>
            <h1 className='text-center font-anton uppercase text-8xl md:hidden pb-10'>virgo</h1>
            <img src={virgoPic} alt="/" className='md:pl-10 h-5/6 w-5/6 object-contain'/>
            <div className='text-md text-justify pl-10 pr-10'>
            <h1 className='text-center font-anton uppercase text-8xl hidden md:block'>virgo</h1>                     
                    <span className='font-anton'>Current Date:</span>  {virgo.current_date} <br />
                    <span className='font-anton'>Compatibility:</span> {virgo.compatibility} <br />
                    <span className='font-anton'>Lucky Number:</span> {virgo.lucky_number} <br />
                    <span className='font-anton'>Lucky Time:</span> {virgo.lucky_time} <br />
                    <span className='font-anton'>Color:</span>  {virgo.color} <br />
                    <span className='font-anton'>Date Range:</span>  {virgo.date_range} <br />
                    <span className='font-anton'>Mood:</span>  {virgo.mood} <br />
                    <span className='font-anton'>Description:</span>  {virgo.description} <br />

                    <div className='pt-10 flex flex-col justify-center'>
                        <p className='uppercase font-anton pb-2 text-center text-2xl'>click the button to show tomorrows horosocpe</p>
                        <button onClick={showMenu} className='border-2 border-black p-3 text-black rounded-full w-full'>Tomorrow</button>
                    </div>

                    <div className={active ? 'visible p-5' : 'hidden'}>
                        
                        <span className='font-anton'>Tomorrow's Date:</span>  {virgoTomorrow.current_date} <br />
                        <span className='font-anton'>Compatibility:</span> {virgoTomorrow.compatibility} <br />
                        <span className='font-anton'>Lucky Number:</span> {virgoTomorrow.lucky_number} <br />
                        <span className='font-anton'>Lucky Time:</span> {virgoTomorrow.lucky_time} <br />
                        <span className='font-anton'>Color:</span>  {virgoTomorrow.color} <br />
                        <span className='font-anton'>Date Range:</span>  {virgoTomorrow.date_range} <br />
                        <span className='font-anton'>Mood:</span>  {virgoTomorrow.mood} <br />
                        <span className='font-anton'>Description:</span>  {virgoTomorrow.description} <br />
                    </div>
            </div>
        </div>
    </>
  )
}

export default Virgo