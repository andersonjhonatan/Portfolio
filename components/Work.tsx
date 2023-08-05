import React, { FC } from 'react';
import { work } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { SiCodereview } from 'react-icons/si';
import { MdPreview } from 'react-icons/md';
import { motion, Variants } from 'framer-motion';

const Work = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y:0,
      opacity: 1,
    },
  };
  return (
    <div className='text-white w-full justify-around flex items-center h-full max-ipad:h-full max-tablet:flex-col max-tablet:row max-smiphone:justify-start max-smiphone:mt-3'>
      <div className='max-ipad:hidden'>
        <p className='text-[25rem] text-[#3a3a3a79] font-thin'>&#123;</p>
      </div>
      <h1 className='text-3xl my-3 max-ipad:my-1 max-ipad:text-xl tablet:hidden max-smiphone:text-lg'>
          Projects<span className='text-[#21d19f] text-2xl'>.</span>
        </h1>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex flex-col h-full text-center gap-2 w-full ml-4 max-ipad:ml-0 max-ipad:max-h-full max-tablet:flex-row max-smiphone:flex-col max-smiphone:gap-1 max-smiphone:justify-center max-smiphone:h-full'
      >
        <h1 className='text-2xl my-2 max-ipad:my-1 max-ipad:text-xl max-tablet:hidden max-smiphone:my-0  '>
          Projects<span className='text-[#21d19f] text-2xl'>.</span>
        </h1>
        {work.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className=' flex w-full flex-row-reverse py-2  bg-[#080808] rounded-md text-start  max-ipad:h-5/6 max-tablet:flex-col max-tablet:w-1/3 max-tablet:h-full max-tablet:gap-4 max-smiphone:flex max-smiphone:flex-row max-smiphone:gap-2 max-smiphone:justify-center  max-smiphone:h-full max-smiphone:w-full'
          >
            <motion.section
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              className='flex-auto flex justify-center mr-4 max-ipad:mr-2 max-tablet:mx-1 max-smiphone:w-1/3  max-smiphone:mr-0 max-smiphone:h-full max-smiphone:flex-col max-smiphone:justify-center'
            >
              <Image
                src={`/${item.name}`}
                alt={item.name}
                width={400}
                height={400}
                className=' object-cover max-ipad:object-contain rounded-lg max-ipad:w-full max-ipad:h-full max-smiphone:object-container max-smiphone:h-2/3 max-smiphone:2/3 '
              />
                <article className='gap-5 flex max-tablet:gap-2 max-smiphone:visible max-smiphone:gap-0 max-smiphone:justify-around smiphone:hidden '>
                <Link
                  href={item.linkGit}
                  target='_blank'
                  className='flex text-xs gap-3 items-center  transition-all duration-300 delay-100 max-tablet:gap-1 '
                >
                  <p className='max-tablet:text-xs max-smiphone:text-[16px] text-orange-500'>
                    <SiCodereview />
                  </p>
                  
                </Link>
                <Link
                  href={item.linkDeploy}
                  target='_blank'
                  className=' flex text-xs gap-2 items-center'
                >
                  <p className='text-lg max-smiphone:text-[22px] text-[#21d19f]'>
                    <MdPreview />
                  </p>
                </Link>
              </article>
            </motion.section>
            <motion.section
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              className='flex flex-col rounded-md flex-auto gap-4 max-ipad:gap-3 pl-4 max-ipad:pl-2  w-3/5 h-2/3 max-smiphone:h-full  max-ipad:w-full max-ipad:h-full max-tablet:pl-1 max-smiphone:gap-2'
            >
              <h1 className='text-xl text-white font-bold max-ipad:text-base max-smiphone:text-xs'>{item.Title}</h1>
              <h2 className='text-gray-400 w-11/12 max-smiphone:w-full max-ipad:text-xs text-justify break-all indent-0 max-smiphone:text-[10px]'>
                {item.subtitle}
              </h2>
              <article className='gap-5 flex max-tablet:gap-2 max-smiphone:hidden'>
                <Link
                  href={item.linkGit}
                  target='_blank'
                  className='flex text-xs gap-3 items-center  max-ipad:bg-orange-400 max-ipad:text-black max-ipad:rounded-lg max-ipad:px-1 hover:bg-orange-400 hover:p-1 hover:rounded-lg transition-all duration-300 delay-100 max-tablet:gap-1 '
                >
                  <p className='max-tablet:text-xs max-smiphone:text-[10px]'>
                    <SiCodereview />
                  </p>
                  <p className='max-tablet:text-xs  max-tablet:text-center max-smiphone:text-[6px] max-iphone:hidden'>{item.github}</p>
                  
                </Link>
                <Link
                  href={item.linkDeploy}
                  target='_blank'
                  className=' flex text-xs gap-2 items-center hover:text-black hover:bg-green-400 max-ipad:bg-green-400 max-ipad:text-black max-ipad:rounded-lg max-ipad:px-1  hover:p-1 hover:rounded-lg transition-all duration-300 delay-100 max-tablet:mx-1'
                >
                  <p className='text-lg max-smiphone:text-[10px]'>
                    <MdPreview />
                  </p>
                  <p className='max-tablet:text-xs max-tablet:text-center max-smiphone:text-[6px]'>{item.deploy}</p>
                </Link>
              </article>
              <article className=' flex items-center gap-3 max-tablet:flex-wrap max-tablet:gap-1 '>
                {item.hastags.map((tag, index) => (
                  <p key={index} className='text-[10px] max-ipad:text-[6px] folder p-1 px-2 rounded-2xl max-smiphone:rounded-lg  max-smiphone:px-0 '>
                    {tag}
                  </p>
                ))}
              </article>
            </motion.section>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;