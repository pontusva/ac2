import React from 'react'
import FortuneTellingCardTwo from './FortuneTelling/FortuneTellingCardTwo';
import ReverseTwo from './ReveresReading/ReverseTwo';
import LightReadingTwo from '../LightAndShadow/LightReadingTwo';
import ShadowReadingTwo from '../LightAndShadow/ShadowReadingTwo';
import KeywordsTwo from './Keywords/KeywordsTwo';

const SecondCard = ({ reading }) => {

    if (reading.length === 0) {
        return <h1>Loading...</h1>;
    }

  return (
    <>
        <div>
            <p className='text-center font-anton text-5xl underline uppercase'>{reading[1].name}</p>
            <FortuneTellingCardTwo reading={reading} />
            <div>
              <ReverseTwo reading={reading} />
            </div>
            <div  className='pt-7'>
              <LightReadingTwo reading={reading} />
            </div>
            <div>
              <ShadowReadingTwo reading={reading} />
            </div>
            <div>
              <KeywordsTwo reading={reading} />
            </div>
        </div>
    </>
  )
}

export default SecondCard