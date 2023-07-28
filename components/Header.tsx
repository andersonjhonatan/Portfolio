'use client';
import React from 'react';

import { IHeaderProps } from '@/interfaces';
import Rocket from './Rocket';

const Header: React.FC<IHeaderProps> = ({ Hello, services, work }) => {
  return (
    <header className='flex items-center justify-around mt-6 relative z-40'>
      <section className='flex items-center justify-around text-white mt-6 flex-wrap-reverse absolute z-40 w-screen'>
        <h1 className='text-2xl'>
          Anderson{' '}
          <span className='text-[#21D19F] bg-slate-900 p-2 rounded-lg animate-pulse'>
            J.
          </span>
        </h1>
        <Rocket />
        <button type='button' className='bg-[#21D19F] p-2 px-8 rounded-sm sm:text-black'>
          Start work
        </button>
      </section>
    </header>
  );
};

export default Header;
