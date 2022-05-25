import {useContext, useState} from 'react';
import {apiContext} from '../../contexts/ApiContext'
import Navbar from '../../Navbar';
import aquarius from '../../assets/zodiacSigns/Aquarius.png'



const Aquarius = () => {
    const {aqua, aquaTomorrow} = useContext(apiContext);
     
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

  return (
    <>
        <Navbar />
        <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center'>
            <h1 className='text-center font-anton uppercase text-8xl md:hidden pb-10'>aquarius</h1> 
            <img src={aquarius} alt="/" className='md:pl-10 md:w-fit md:h-fit h-5/6 w-5/6 object-contain'/>
            <div className='text-sm text-justify pl-10 pr-10'>
            <h1 className='text-center font-anton uppercase md:text-8xl hidden md:block'>aquarius</h1>                     
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