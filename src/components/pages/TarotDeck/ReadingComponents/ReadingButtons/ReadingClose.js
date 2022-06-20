import React from "react";

const ReadingClose = ({ close, disable }) => {
    return (
        <>
            <div>
                <button disabled={disable} onClick={close}> Close </button>
            </div>
        </>
    );
};

export default ReadingClose;
