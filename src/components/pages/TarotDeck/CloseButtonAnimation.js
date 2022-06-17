import React from "react";
import { motion } from "framer-motion";

const CloseButtonAnimation = ({ update, disable, show }) => {

    return (
        <>

                <div key='closeButton'>
                    <motion.button
                        className='w-36 flex items-center justify-center font-roboto'
                        transition={{ duration: 2.5 }}
                        animate={{ opacity: [0, 1] }}
                        onClick={update}
                        disabled={disable}
                    >
                        close
                    </motion.button>
                </div>

        </>
    );
};

export default CloseButtonAnimation;
