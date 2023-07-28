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
    <aside className=' flex flex-col h-5/6 justify-end gap-8 absolute left-16 text-white'>
      <ul className='flex flex-col gap-3 pl-8'>
        {iconAnimations.map((style, index) => (
          <animated.li key={index} style={style} className='hover:text-[#21D19F]' >
            {icons[index]}
          </animated.li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
