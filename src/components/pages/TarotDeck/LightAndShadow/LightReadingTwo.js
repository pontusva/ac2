import React from "react";

const LightReadingTwo = ({ reading }) => {
    return (
        <>
            <div>
                <p className='text-center font-anton text-2xl uppercase underline pb-5'>
                    Light
                </p>
                {reading[1].meanings.light.map((light, index) => {
                    return (
                        <div key={index} className='text-center'>
                            <ul>
                                <li>{light}.</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default LightReadingTwo;
