'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import photoPrincipal from '@/public/Captura_de_tela_de_2023-03-27_10-46-05-removebg-preview.png';
import { IMain } from '@/interfaces';
import { motion, AnimatePresence } from 'framer-motion';


import Scroll from './Scroll';
import Aside from './Aside';
import { useSpring, animated } from 'react-spring';
import Developer from '@/components/animation/Developer';

const Main: FC<IMain> = ({ Hello, Services, Work, Skills, Contact, Certificates }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  };

  const [isVisible, setIsVisible] = useState(false);

  const imageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className='flex items-center sm:h-screen justify-center sm:w-screen mt-10 transition-all'>
      {
        !show &&  <Developer />
      }
  
      {show && <Aside />}
      <section className='flex items-center justify-center z-0'>
        <section className='bg-black border-4  border-[#3dffc8] rounded-full align-bottom flex justify-end items-end'>
          {show ||
            (isVisible && (
              <button
                onClick={handleClick}
                className='text-white absolute left-0 right-0 m-auto p-2 rounded-3xl text-2xl w-40 animate-pulse z-50'
              >
                {!show && 'Click'}
              </button>
            ))}
          {!show ? (
            <animated.div style={imageAnimation}>
              <Image
                src={photoPrincipal}
                alt='logo'
                width={400}
                height={400}
                className='rounded-full bg-[#00000000] z-10'
              />
            </animated.div>
          ) : (
            <animated.div style={imageAnimation}>
              <Image
                src={photoPrincipal}
                alt='logo'
                width={300}
                height={300}
                className='rounded-full bg-[#00000000] z-10'
              />
            </animated.div>
          )}
        </section>
        {show && (
          <Scroll
            Hello={Hello}
            Services={Services}
            Work={Work}
            Skills={Skills}
            Contact={Contact}
            Certificates={Certificates}
          />
        )}
      </section>
    </main>
  );
};

export default Main;
