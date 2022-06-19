import React from "react";

const ReadingClose = ({ close }) => {
    return (
        <>
            <div>
                <button onClick={close}> Close </button>
            </div>
        </>
    );
};

export default ReadingClose;
