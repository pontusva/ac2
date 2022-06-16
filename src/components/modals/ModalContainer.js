import { motion } from 'framer-motion';
import React from 'react'
import ModalOverlay from './ModalOverlay';


const ModalContainer = () => {
  return (
    <ModalOverlay>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        >
            <p>Hllo</p>
        </motion.div>
    </ModalOverlay>
  )
}

export default ModalContainer