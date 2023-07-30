import React, { FC } from 'react';
import { work } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import {SiCodereview} from 'react-icons/si';
import {MdPreview} from 'react-icons/md';

const Work = () => {
  return (
    <div className='text-white ml-24 sm:w-[60rem] sm:h-auto justify-around flex items-center'>
      <div className=' mt-14'>
        <p className='text-[25rem] text-[#3a3a3a79] font-thin'>&#123;</p>
      </div>
      <div className='p-4 flex flex-col text-center gap-2 w-full'>
        <h1 className='text-3xl'>Projects<span className='text-[#21d19f] text-2xl'>.</span></h1>
        {work.map((item) => (
          <div
            key={item.id}
            className=' flex items-stretch justify-between flex-row-reverse py-4 bg-[#080808] border border-[#3a3a3a79] rounded-md text-start'
          >
            <section className='flex-2 flex justify-center'>
              <Image src={`/${item.name}`} alt={item.name} width={150} height={150} className='w-full object-contain rounded-lg mr-4' />
            </section>
            <section className='flex flex-col rounded-md flex-1 gap-4 pl-4'>
              <h1 className='text-2xl text-white font-bold'>{item.Title}</h1>
              <h2 className='text-gray-400'>{item.subtitle}</h2>
              <article className='gap-5 flex'>
                <Link href={item.linkGit} target='_blank' className='flex text-xs gap-3 items-center hover:bg-orange-400 hover:p-1 hover:rounded-lg transition-all duration-300 delay-100'>
                  <p><SiCodereview /></p>
                  {item.github}
                </Link>
                <Link href={item.linkDeploy} target='_blank' className=' flex text-xs gap-2 items-center hover:text-black hover:bg-green-400 hover:p-1 hover:rounded-lg transition-all duration-300 delay-100 '>
                  <p className='text-lg'><MdPreview /></p>
                  <p>{item.deploy}</p>
                </Link>
              </article>
              <article className=' flex items-center gap-3'>
                {item.hastags.map((tag) => (
                  <p key={item.id} className='text-[10px] folder p-1 px-2 rounded-2xl'>{tag}</p>
                ))}
              </article>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
