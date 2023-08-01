'use client';
import React from 'react';
import { ScrollContext } from './Main';
import { IHeaderProps } from '@/interfaces';
import Rocket from './Rocket';

import { useContext } from 'react';
const Header: React.FC<IHeaderProps> = ({ Hello, services, work }) => {
  const { handleClick, setShow, show } = useContext(ScrollContext);

  const handleButtonClick = () => {
    console.log('Button clicked!');
    handleClick();
  };

  return (
    <header className='flex items-center justify-around mt-6 relative z-40'>
      <section className='flex items-center justify-around text-white mt-6 flex-wrap-reverse absolute z-40 w-screen'>
        <h1 className='text-2xl max-iphone:text-xl'>
          Anderson{' '}
          <span className='text-[#21D19F] bg-slate-900  max-iphone:p-1 p-2 rounded-lg animate-pulse'>
            J.
          </span>
        </h1>
        <Rocket />
        <button
          type='button'
          className='bg-[#21D19F] p-2 px-8  max-iphone:px-6 rounded-sm sm:text-black hover:p-3 hover:px-9 duration-300 delay-150 ease-out'
          onClick={handleButtonClick}
        >
          {show ? 'Closed' : 'Start'}
        </button>
      </section>
    </header>
  );
};

export default Header;
