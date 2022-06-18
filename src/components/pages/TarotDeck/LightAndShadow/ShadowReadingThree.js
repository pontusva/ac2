import React from "react";

const ShadowReadingThree = ({reading}) => {
    return (
        <>
            <div>
                <p className='text-center font-anton text-2xl uppercase underline pb-5 pt-7'>
                    Shadow
                </p>
                {reading[2].meanings.shadow.map((shadow, index) => {
                    return (
                        <div key={index} className='text-center'>
                            <ul>
                                <li>{shadow}.</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ShadowReadingThree;
