import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Developer = () => {
  const getRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const getRandomDirection = () => {
    const directions = ['left', 'right', 'top', 'bottom'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    const initialPosition = {
      x: randomDirection === 'left' ? '80vw' : randomDirection === 'right' ? '-80vw' : `${getRandomNumber(-80, 80)}vw`,
      y: randomDirection === 'top' ? '80vh' : randomDirection === 'bottom' ? '-80vh' : `${getRandomNumber(-80, 80)}vh`,
    };

    const exitPosition = {
      x: randomDirection === 'left' ? '-80vw' : randomDirection === 'right' ? '80vw' : 0,
      y: randomDirection === 'top' ? '-80vh' : randomDirection === 'bottom' ? '80vh' : 0,
    };

    return { randomDirection, initialPosition, exitPosition };
  };

  const [animationProps, setAnimationProps] = useState(getRandomDirection());

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationProps(getRandomDirection());
    }, 10000); // Change direction every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ overflow: 'hidden', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <motion.div
        className='z-10 absolute flex items-center'
        initial={animationProps.initialPosition}
        animate={animationProps.exitPosition} // Exit completely before re-entering from a different direction
        exit={animationProps.exitPosition}
        transition={{
          repeat: Infinity,
          duration: 10, // The time taken to exit and re-enter (in seconds)
          ease: 'linear',
        }}
        onAnimationComplete={() => setAnimationProps(getRandomDirection())} // Set a new random direction after each complete animation loop
        style={{ overflow: 'hidden', transform: 'translateZ(0)' }} // Removed the 'translateZ(0)' here
      >
        <p className='text-[#1b1b1b91] text-9xl max-ipad:text-6xl'>Web Developer</p>
      </motion.div>
    </div>
  );
};

export default Developer;
