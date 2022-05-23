import React from 'react'
import {MenuIcon} from '@heroicons/react/outline'
import {Link} from 'react-router-dom';
import MenuItems from '../components/MenuItems';
import sun from '../components/assets/sun-logo.png'
import {useState} from 'react';


const Navbar = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

  return (
    <>
        <div className='bg-cover bg-zinc-50 bg-center relative w-full h-36 flex justify-between text-black items-center'>           
            <div className='flex items-center'>
                <img src={sun} alt="logo" className='w-24 h-24 scale-150 md:ml-20' />
                <p className='md:pl-24 md:text-7xl font-anton'>ASTROLOGICAL CALLING.</p>
            </div>
            
            <nav>
                <div className='absolute right-6 md:hidden top-6 scale-100'>  
                    <MenuIcon className='w-5 scale-150 cursor-pointer' onClick={showMenu}/>
                </div>

                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10 mr-20'>    
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/horoscope'><li>Horoscope</li></Link>
                    <li>Zodiac</li>
                    <li>About</li>
                </ul>
                <MenuItems showMenu={showMenu} active={active}/>        
            </nav>
        </div>
    </>
  )
}

export default Navbar