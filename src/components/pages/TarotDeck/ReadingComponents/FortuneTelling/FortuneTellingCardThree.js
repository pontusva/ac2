import React from "react";

const FortuneTellingCardThree = ({reading}) => {
    return (
        <>
            <div className='w-full'>
                <div className='pt-5 text-center'>
                    {reading[2].fortune_telling.map((telling, index) => {
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

export default FortuneTellingCardThree;
