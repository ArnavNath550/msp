import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function ScrollingContainer() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headingControls = useAnimation();

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
    // Calculate font size based on scroll position, with a maximum of 8rem
    const fontSize = Math.min(1 + scrollPosition / 80, 8);

    headingControls.start({
      fontSize: `${fontSize}rem`,
    });
  }, [scrollPosition, headingControls]);

  return (
    <div className="scrollingContainer">
      <motion.div
        className="hero-heading"
        style={{
          fontSize: '1rem', // Initial font size
        }}
        animate={headingControls}
      >
        I love you so much <br /> mera sundorii puchiii
      </motion.div>
      <div style={{fontSize: '3rem'}}>itna itna itna itna itna.. navi loves his big girl !</div>
    </div>
  );
}

export default ScrollingContainer;
