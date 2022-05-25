import React from 'react'
import {XIcon } from '@heroicons/react/outline';
import {Link} from 'react-router-dom';

const MenuItems = ({ showMenu,active }) => {
  return (   
      <>
        <ul className={active ? 'md:hidden fixed flex-col flex items-center justify-center inset-0 left-1/4 uppercase z-10 bg-white/40 backdrop-blur-lg gap-8 p-8' : 'hidden'}>   
            <XIcon onClick={showMenu} className='w-5'/>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/horoscope'><li>Horoscope</li></Link>
            <li>Zodiac</li>
            <li>About</li>
        </ul>  
      </>
        
  )
}

export default MenuItems