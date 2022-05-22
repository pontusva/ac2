import React from 'react'
import {XIcon } from '@heroicons/react/outline'

const MenuItems = ({ showMenu,active }) => {
  return (   
      <>
        <ul className={active ? 'md:hidden fixed flex-col flex items-center justify-center inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 p-8' : 'hidden'}>   
            <XIcon onClick={showMenu} className='w-5'/>
            <li>Home</li>
            <li>Horoscope</li>
            <li>Zodiac</li>
            <li>About</li>
        </ul>  
      </>
        
  )
}

export default MenuItems