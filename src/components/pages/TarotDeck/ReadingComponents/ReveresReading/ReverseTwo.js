import React from "react";

const ReverseTwo = ({reading}) => {
    return (
        <>
            <div>
                <p className='text-center font-anton text-2xl underline uppercase'>
                    Reversed
                </p>
                <p className='text-center pt-2'>
                    {reading[1].reversed === true ? "yes" : "no"}
                </p>
            </div>
        </>
    );
};

export default ReverseTwo;
