import React from 'react'
import { MenuIcon} from '@heroicons/react/outline'
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
        <div className='bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 bg-cover bg-center relative fixed w-full h-36 flex justify-between text-black items-center '>           
            <div>
                <img src={sun} alt="logo" className='w-24 h-24 scale-150 md:ml-20' />
            </div>
            
            <nav>
                <div className='absolute right-6 md:hidden top-6 scale-100'>  
                    <MenuIcon className='w-5 scale-150 cursor-pointer' onClick={showMenu}/>
                </div>

                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10 mr-20'>    
                    <li>Home</li>
                    <li>Horoscope</li>
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