import React from 'react'
import Navbar from '../Navbar'
import bear from '../assets/bear.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-50 flex md:flex-row flex-col md:w-full w-screen justify-center text-justify md:space-x-36 md:fixed md:h-full h-screen pt-36">
        <div className='bg-zinc-50'>
          <img src={bear} alt="/" className='object-contain md:w-80 w-full h-80'/>
        </div>
        <div className='md:w-96 h-96 w-full text-sm lg:text-sm px-3 bg-zinc-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque, possimus dolores non nulla voluptatum aperiam voluptatem iure explicabo accusantium commodi optio blanditiis sint suscipit magnam labore atque recusandae delectus sequi facilis voluptates dolorem adipisci. Dolore, odit beatae. Fuga repellat, deserunt est mollitia iusto ullam perspiciatis ducimus quasi, harum quod placeat cupiditate aliquam unde iste quos quaerat, itaque ratione nisi minima laudantium architecto nobis dolores distinctio? A voluptates dolorem, modi incidunt rem exercitationem iusto debitis velit ratione laborum reprehenderit odio libero enim dolore expedita magni vitae aut esse consequuntur quibusdam error, fugit aperiam? Tenetur inventore totam dignissimos pariatur iure voluptatum, tempora</div>
      </div>
    </>
  )
}

export default Home