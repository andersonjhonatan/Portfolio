import React, { FC, useState } from 'react';
import { certifications } from '@/constants';
import { SkillCertification } from '@/types/certification';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Certificate = () => {
  const [active, setActive] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (photo: string) => {
    setSelectedImage(photo);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='text-white w-full gap-8 max-tablet:gap-2 justify-center flex items-center p-4 max-tablet:p-0 h-full'>
      <section className=' flex-2 top-0 mb-8 max-ipad:hidden'>
        <p className='text-[20rem] text-[#3a3a3a79] font-thin '>&#123;</p>
      </section>
      <section className='text-center flex flex-col items-center  max-tablet:h-full max-tablet:w-full'>
        <article className='flex justify-end mb-8 max-tablet:mb-3'>
          <b className='bg-[#21d19f] text-black w-4 h-4 mt-3 mr-3 flex justify-center text-start pb-4 text-xs rounded-full absolute '>{certifications.length}</b>
          <h1 className='text-3xl p-4 z-00 max-tablet:text-xl'>
            Certificates<span className='text-[#21d19f] text-2xl'>.</span>
          </h1>
        </article>
        <section className='flex items-center justify-around gap-4'>
          <motion.ul
            className='grid grid-cols-3 max-tablet:flex max-tablet:justify-center max-tablet:flex-wrap gap-2 ml-3 max-tablet:ml-0'
            variants={container}
            initial='hidden'
            animate='visible'
          >
            {active &&
              certifications.map(({ id, photo }: SkillCertification) => (
                <motion.li
                  className='cursor-zoom-in item'
                  key={id}
                  variants={item}
                  whileHover={{ scale: 0.9}}
                  onClick={() => handleImageClick(photo)}
                >
                  <Image
                    src={`/${photo}`}
                    width={200}
                    height={200}
                    alt={photo}
                    className='rounded-md duration-300 ease-in w-full max-tablet:w-[120px]'
                  />
                </motion.li>
              ))}
          </motion.ul>
        </section>
        <section className='flex mb-12 mt-2 max-tablet:mb-2'>
          <h1 className='text-sm  justify-center items-center text-gray-500'>
            <span className='text-[#21d19f] text-2xl'>*</span> Para acessar o Zoom, clique no certificado.
          </h1>
        </section>
      </section>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center'
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={`/${selectedImage}`}
                width={700}
                height={700}
                alt={selectedImage}
                className='rounded-xl'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificate;
