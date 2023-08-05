'use client';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import photoPrincipal from '@/public/Captura_de_tela_de_2023-03-27_10-46-05-removebg-preview.png';
import { IMain } from '@/interfaces';
import { createContext } from 'react';
import Scroll from './Scroll';
import Aside from './Aside';
import { useSpring, animated } from 'react-spring';
import Header from './Header';
import { headerProps } from '@/constants';

export type IScrollContext = {
  show: boolean;
  handleClick: () => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ScrollContext = createContext<IScrollContext>({
  show: false,
  handleClick: () => {},
  setShow: () => {},
});
const Main: FC<IMain> = ({ Hello, Services, Work, Skills, Certificates }) => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const imageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 200 },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollContextValue = useMemo(() => {
    return {
      show,
      handleClick,
      setShow,
    };
  }, [show, handleClick]);

  return (
    <ScrollContext.Provider value={scrollContextValue}>
      <Header {...headerProps} />
      <main className='flex items-center  h-screen  justify-center w-screen mt-10 transition-all max-tablet:flex-col max-tablet:flex max-iphone:w-[100%]'>
        <div className='flex items-center  max-tablet:flex-col justify-center z-0 h-full w-[90%] max-iphone:w-[100%]'>
          <section className='flex-auto w-[30%] max-tablet:w-[60%] max-iphone:w-full flex flex-col justify-center items-center pt-16 max-tablet:pt-0 max-iphone:pt-4'>
            <section className='bg-black border-4 border-[#21d19f] rounded-full align-bottom flex justify-end items-end flex-col'>
              {show ||
                (isVisible && (
                  <>
                    <button
                      onClick={handleClick}
                      className='text-[#21d19f82] absolute left-0 right-0 m-auto p-2 rounded-3xl text-sm w-40 animate-pulse z-50 overline'
                    >
                      {!show && 'Click Me'}
                    </button>
                  </>
                ))}
              <animated.div style={imageAnimation}>
                {show ? (
                  <>
                    <section className='bg-[#21d19f] absolute w-[2px] rounded-full left-0   h-2/4 max-ipad:h-2/4 max-ipad:bottom-28  text-[#21d19f]'>
                      .
                    </section>
                    <Image
                      src={photoPrincipal}
                      alt='logo'
                      width={400}
                      height={400}
                      onClick={handleClick}
                      className='cursor-pointer rounded-full bg-[#00000000] z-10 max-iphone:w-[150px] max-iphone:h-[150px] max-smiphone:w-[100px] max-smiphone:h-[100px] max-tablet:w-[250px] max-tablet:h-[250px]'
                    />
                  </>
                ) : (
                  <Image
                    src={photoPrincipal}
                    alt='logo'
                    width={400}
                    height={400}
                    onClick={handleClick}
                    className='cursor-pointer rounded-full bg-[#00000000] z-10 max-iphone:w-[300px] max-iphone:h-[320px] max-tablet:w-[360px] max-tablet:h-[360px] '
                  />
                )}
              </animated.div>
            </section>
          { 
            !show && 
            <aside>
              <Aside />
            </aside>
          }
              
          
          </section>
          {show && (
            <Scroll
              Hello={Hello}
              Services={Services}
              Work={Work}
              Skills={Skills}
              Certificates={Certificates}
            />
          )}
        </div>
      </main>
    </ScrollContext.Provider>
  );
};

export default Main;
