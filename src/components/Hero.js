import { useWindowSize } from '@uidotdev/usehooks';
import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

import { motion } from 'framer-motion';

function Hero() {
  const [isExploding, setIsExploding] = React.useState(true);

  return (
    <div className="hero">
        <div className="hero-confetti">
        <ConfettiExplosion force={2} particleCount="300" duration={5000}/>
        </div>
        <motion.div 
          initial={{ scale: 5, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          duration={8000}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="hero-heading zoom-in">
            Ekdomm happiest <span>2nd</span> birthday
            <motion.div>
              mera puchuuu piee !!
            </motion.div>
        </motion.div>
        <div className="hero-scroll">
          <span>Ekdomm scroll down mera puchiii</span>
        </div>
    </div>
  )
}

export default Hero