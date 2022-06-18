import React from 'react'
import Navbar from '../../Navbar';
import { drawReading } from "tarot-deck";
import {useState, useEffect} from 'react';


const Reading = () => {
    const [reading, setReading] = useState([]);
    const [show, setShow] = useState(false);
    const [disable, setDisable] = useState(false);

    const updateReading = () => {
        setReading(drawReading());
        setShow(!show);
        setDisable(true);
        setTimeout(() => {
            setDisable(false);
        }, 3500);
    };

    useEffect(() => {
        setReading(drawReading());
    }, []);

    if (reading.length === 0) {
        return <h1>Loading...</h1>;
    }

    console.log(drawReading());

  return (
    <>
        <nav><Navbar /></nav>
        <div className='h-screen bg-zinc-50 flex justify-center items-center'>
            Work in progress....
        </div>
    </>
  )
}

export default Reading