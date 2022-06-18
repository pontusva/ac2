import React from "react";

const ReverseThree = ({ reading }) => {
    return (
        <>
            <div className='pb-7'>
                <p className='text-center font-anton text-2xl underline uppercase'>
                    Reversed
                </p>
                <p className='text-center pt-2'>
                    {reading[2].reversed === true ? "yes" : "no"}
                </p>
            </div>
        </>
    );
};

export default ReverseThree;
