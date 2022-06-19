import React from "react";

const ReversedOne = ({ reading, show }) => {
    return (
        <>
            <div className='pb-7'>
                <p className='text-center font-anton text-2xl underline uppercase'>
                    Reversed
                </p>

                <p exit={{ opacity: 0 }} className='text-center pt-2'>
                    {show && reading[0].reversed === true ? "yes" : "no"}
                </p>
            </div>
        </>
    );
};

export default ReversedOne;
