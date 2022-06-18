import React from "react";

const KeywordsOne = ({ reading }) => {
    return (
        <>
            <div>
                <p className='text-center font-anton text-2xl underline uppercase pb-5 pt-7'>
                    Keywords
                </p>
                {reading[0].keywords.map((keywords, index) => {
                    return (
                        <ul className='text-center' key={index}>
                            <li>{keywords}</li>
                        </ul>
                    );
                })}
            </div>
        </>
    );
};

export default KeywordsOne;
