import React, { useEffect, useRef, useState } from 'react'

function MoreThanAllTheStarsInTheSky() {
    const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold based on your needs
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup the observer on component unmount to avoid memory leaks
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={`night-bg fade-container`} ref={containerRef}>
      {/* Your other content goes here */}
      <div className="night-container">
        <div className="">

        </div>

        <div className="hero-heading" style={{color: "#fff"}}>
            I love my big girl, more than all the ekdom brightest stars in the night sky ❤️
        </div>
      </div>
    </div>
  );
}

export default MoreThanAllTheStarsInTheSky