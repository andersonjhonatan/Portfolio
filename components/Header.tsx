'use client';
import React, { useState } from 'react';
import { ScrollContext } from './Main';
import { IHeaderProps } from '@/interfaces';
import Rocket from './Rocket';

import { useContext } from 'react';
import ButtonHamburguer from './ButtonHamburguer';
const Header: React.FC<IHeaderProps> = ({ Hello, services, work }) => {
  const { handleClick, setShow, show } = useContext(ScrollContext);

  const handleButtonClick = () => {
    console.log('Button clicked!');
    handleClick();
  };

  return (
    <header className='flex items-center justify-around  mt-12 max-ipad:mt-8 relative z-40'>
      <section className='flex items-center justify-around max-ipad:gap-16 text-white flex-wrap-reverse absolute z-40 w-screen'>
        <h1 className='text-2xl max-iphone:text-xl max-ipad:text-xl'>
          Anderson{' '}
          <span className='text-[#21D19F] bg-slate-900  max-iphone:p-1 p-2 rounded-lg animate-pulse'>
            J.
          </span>
        </h1>
        <Rocket />
        <button
          type='button'
          className='bg-[#21D19F] p-2 px-8  max-iphone:px-5 max-iphone:p-1 rounded-sm sm:text-black lg:hover:p-3 lg:hover:px-9 duration-300 delay-150 ease-out max-ipad:hidden'
          onClick={handleButtonClick}
        >
          {show ? 'Closed' : 'Start'}
        </button>
        <ButtonHamburguer />
      </section>
    </header>
  );
};

export default Header;
