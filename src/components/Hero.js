import { useWindowSize } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

import { motion, useAnimation } from 'framer-motion';

function Hero() {
  const [isExploding, setIsExploding] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const parentHeight = window.innerHeight; // Use your parent div height
    const halfwayPoint = parentHeight / 2;

    // Check if the user has scrolled beyond a certain point
    if (scrollPosition <= 800) {
      // Calculate the new top position based on scroll
      let newTop = scrollPosition;

      // Ensure the div stays within the parent
      newTop = Math.max(0, Math.min(newTop, halfwayPoint));

      controls.start({ top: newTop });
    } else {
      controls.start({position: "absolute"})
    }
  }, [scrollPosition, controls]);

  return (
    <div className="hero">
       <motion.div
        className="hero-heart heart-left"
        style={{
          position: 'absolute',
          left: -200,
          top: 0,
          width: '100%',
          padding: '10px',
          zIndex: 1,
        }}
        initial={{ top: 0 }}
        animate={controls}
      >
        <svg width="278" height="246" viewBox="0 0 278 246" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 75L139 139L203 75" stroke-width="150" stroke-linecap="round"/>
        </svg>
      </motion.div>
      <motion.div
        className="hero-heart heart-right"
        style={{
          position: 'absolute',
          right: -200,
          top: 0,
          padding: '10px',
          zIndex: 1,
        }}
        initial={{ top: 0 }}
        animate={controls}
      >
        <svg width="278" height="246" viewBox="0 0 278 246" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 75L139 139L203 75" stroke-width="150" stroke-linecap="round"/>
        </svg>
      </motion.div>
      <div className="hero-confetti">
        {isExploding && <ConfettiExplosion force={2} particleCount="300" duration={5000}/>}
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
        className="hero-heading zoom-in"
      >
        <div>
          <img src="./images/kissingmyprincesspuchi.gif" />
        </div>
        Ekdomm happiest <span style={{color: "navy"}}>2nd</span> birthday
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

export default Hero;
