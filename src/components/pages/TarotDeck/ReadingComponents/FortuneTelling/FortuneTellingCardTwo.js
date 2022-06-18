import React from "react";

const FortuneTellingCardTwo = ({reading}) => {
    return (
        <>
            <div className='w-full'>
                <div className='pt-5 text-center'>
                    {reading[1].fortune_telling.map((telling, index) => {
                        return (
                            <ul key={index}>
                                <li>{telling}.</li>
                            </ul>
                        );
                    })}
                    .
                </div>
            </div>
        </>
    );
};

export default FortuneTellingCardTwo;
