import React from 'react'
import Navbar from '../Navbar'
import bear from '../assets/bear.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full justify-center text-justify space-x-36 fixed h-full pt-36">
        <div className=''>
          <img src={bear} alt="/" className='object-contain w-96 h-96'/>
        </div>
        <div className='w-96 h-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque, possimus dolores non nulla voluptatum aperiam voluptatem iure explicabo accusantium commodi optio blanditiis sint suscipit magnam labore atque recusandae delectus sequi facilis voluptates dolorem adipisci. Dolore, odit beatae. Fuga repellat, deserunt est mollitia iusto ullam perspiciatis ducimus quasi, harum quod placeat cupiditate aliquam unde iste quos quaerat, itaque ratione nisi minima laudantium architecto nobis dolores distinctio? A voluptates dolorem, modi incidunt rem exercitationem iusto debitis velit ratione laborum reprehenderit odio libero enim dolore expedita magni vitae aut esse consequuntur quibusdam error, fugit aperiam? Tenetur inventore totam dignissimos pariatur iure voluptatum, tempora</div>
      </div>
    </>
  )
}

export default Home