import React from 'react'
import LightReadingThree from '../LightAndShadow/LightReadingThree';
import ShadowReadingThree from '../LightAndShadow/ShadowReadingThree';
import FortuneTellingCardThree from './FortuneTelling/FortuneTellingCardThree';
import KeywordsThree from './Keywords/KeywordsThree';
import ReverseThree from './ReveresReading/ReverseThree';

const ThirdCard = ({ reading }) => {

    if (reading.length === 0) {
        return <h1>Loading...</h1>;
    }
   
  return (
    <>
        <div>
            <p className='text-center font-anton text-5xl underline uppercase'>{reading[2].name}</p>
            <FortuneTellingCardThree reading={reading}/>
            <div>
              <ReverseThree reading={reading} />
            </div>
            <div>
              <LightReadingThree reading={reading} />
            </div>
            <div>
              <ShadowReadingThree reading={reading} />
            </div>
            <div>
              <KeywordsThree reading={reading}/>
            </div>
        </div>
    </>
  )
}

export default ThirdCard