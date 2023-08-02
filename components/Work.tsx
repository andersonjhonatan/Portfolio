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
    <div className='text-white w-full justify-around flex items-center h-full max-ipad:h-full'>
      <div className='max-ipad:hidden'>
        <p className='text-[25rem] text-[#3a3a3a79] font-thin'>&#123;</p>
      </div>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex flex-col h-full text-center gap-2 w-full ml-4 max-ipad:ml-0 max-ipad:max-h-full'
      >
        <h1 className='text-3xl my-3 max-ipad:my-1 max-ipad:text-xl'>
          Projects<span className='text-[#21d19f] text-2xl'>.</span>
        </h1>
        {work.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className=' flex w-full flex-row-reverse py-2  bg-[#080808] rounded-md text-start  max-ipad:h-5/6'
          >
            <motion.section
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              className='flex-auto flex justify-center mr-4 max-ipad:mr-2'
            >
              <Image
                src={`/${item.name}`}
                alt={item.name}
                width={400}
                height={400}
                className=' object-cover max-ipad:object-contain rounded-lg max-ipad:w-full max-ipad:h-full'
              />
            </motion.section>
            <motion.section
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              className='flex flex-col rounded-md flex-auto gap-4 max-ipad:gap-3 pl-4 max-ipad:pl-2  w-3/5 h-2/3 max-ipad:w-full max-ipad:h-full'
            >
              <h1 className='text-xl text-white font-bold max-ipad:text-base'>{item.Title}</h1>
              <h2 className='text-gray-400 w-11/12 max-ipad:text-xs text-justify break-all indent-0'>
                {item.subtitle}
              </h2>
              <article className='gap-5 flex'>
                <Link
                  href={item.linkGit}
                  target='_blank'
                  className='flex text-xs gap-3 items-center  max-ipad:bg-orange-400 max-ipad:text-black max-ipad:rounded-lg max-ipad:px-1 hover:bg-orange-400 hover:p-1 hover:rounded-lg transition-all duration-300 delay-100'
                >
                  <p>
                    <SiCodereview />
                  </p>
                  {item.github}
                </Link>
                <Link
                  href={item.linkDeploy}
                  target='_blank'
                  className=' flex text-xs gap-2 items-center hover:text-black hover:bg-green-400 max-ipad:bg-green-400 max-ipad:text-black max-ipad:rounded-lg max-ipad:px-1  hover:p-1 hover:rounded-lg transition-all duration-300 delay-100 '
                >
                  <p className='text-lg'>
                    <MdPreview />
                  </p>
                  <p>{item.deploy}</p>
                </Link>
              </article>
              <article className=' flex items-center gap-3'>
                {item.hastags.map((tag, index) => (
                  <p key={index} className='text-[10px] max-ipad:text-[6px] folder p-1 px-2 rounded-2xl'>
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