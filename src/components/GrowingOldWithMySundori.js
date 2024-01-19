import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function GrowingOldWithMySundori() {
  const images = [
    './mybeautifulpuchi/puchi-1.jpeg',
    './mybeautifulpuchi/puchi-2.jpeg',
    './mybeautifulpuchi/puchi-3.jpeg',
    './mybeautifulpuchi/puchi-4.jpeg',
    './mybeautifulpuchi/puchi-5.jpeg',
  ];

  return (
    <div className="growingOldWithYou-container">
      <div className="my-sundori-gallery">
        {images.map((src, index) => (
          <ImageWithFadeAnimation key={index} src={src} index={index} />
        ))}
      </div>
      <div className="hero-heading">
        navi loves growing old with his <br /> sundori princess so much
      </div>
    </div>
  );
}

const ImageWithFadeAnimation = ({ src, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div className={`mysundori-image-container mysundori-image-${index + 1}`} ref={ref}>
      <motion.img
        src={src}
        className={`mysundori-image`}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      />
      <motion.div className="heart">&hearts;</motion.div>
    </motion.div>
  );
};

export default GrowingOldWithMySundori;
