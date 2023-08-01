import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BoxAnimation = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isBoxOpen) {
      controls.start('open');
    } else {
      controls.start('closed');
    }
  }, [isBoxOpen, controls]);

  const handleButtonClick = () => {
    setIsBoxOpen((prevIsBoxOpen) => !prevIsBoxOpen);
  };

  const boxVariants = {
    open: {
      scale: 1.2,
      rotate: 0,
      transition: { duration: 1 }
    },
    closed: {
      scale: 1,
      rotate: -45,
      transition: { duration: 1 }
    }
  };

  const mustacheVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.5 }
    },
    closed: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      <motion.button onClick={handleButtonClick}>
        {isBoxOpen ? 'Close Box' : 'Open Box'}
      </motion.button>
      <motion.div
        style={{
          width: 200,
          height: 200,
          background: 'lightblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        variants={boxVariants}
        initial="closed"
        animate={controls}
      >
        <motion.div
          style={{
            width: 30,
            height: 5,
            background: 'black',
            borderRadius: 10,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          variants={mustacheVariants}
        />
        <motion.div
          style={{
            width: 30,
            height: 5,
            background: 'black',
            borderRadius: 10,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(90deg)',
          }}
          variants={mustacheVariants}
        />
      </motion.div>
    </div>
  );
};

export default BoxAnimation;
