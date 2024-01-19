import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ToMyBigGirl() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headingControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    './mybeautifulpuchi/sc-puchi-1.png',
    './mybeautifulpuchi/sc-puchi-2.png',
    './mybeautifulpuchi/sc-puchi-3.png',
    './mybeautifulpuchi/sc-puchi-4.png',
    './mybeautifulpuchi/sc-puchi-5.png',
  ];

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
    if (inView) {
      // Calculate font size based on scroll position, with a maximum of 8rem
      const fontSize = Math.min(1 + scrollPosition / 80, 8);

      headingControls.start({
        fontSize: `${fontSize}rem`,
      });
    }
  }, [scrollPosition, headingControls, inView]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="toMyBigGirl-container" ref={ref}>
      <motion.div
        className="hero-heading"
        style={{
          fontSize: '1rem', // Initial font size
          position: 'relative',
          color: 'navy',
          zIndex: 2, // Ensure text is above the overlay
        }}
        animate={headingControls}
      >
        To My Mera Home, To Mera Whole Wide World
      </motion.div>
      <div className="image-overlay">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`image-slide ${index === activeImageIndex ? 'active' : ''}`}
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: index === activeImageIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export default ToMyBigGirl;
