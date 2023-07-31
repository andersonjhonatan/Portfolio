import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { icons } from '@/constants';


const Aside = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use react-spring useTrail to animate the icons
  const iconAnimations = useTrail(icons.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 700 },
  });

  // Use useEffect to trigger animation when component appears on the screen
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <aside className='flex justify-center  text-white z-40 w-full mt-12'>
      <ul className='flex gap-3'>
        {iconAnimations.map((style, index) => (
          <animated.li key={index} style={style} className='hover:text-[#21D19F] text-3xl duration-300 delay-75 ease-in-out' >
            {icons[index]}
          </animated.li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
