import React from 'react';
import { useSpring, animated } from 'react-spring';
import { LuFolderGit2 } from 'react-icons/lu';
import {HiOutlineDeviceMobile} from 'react-icons/hi'; 
import {TiDeviceDesktop} from 'react-icons/ti';

type Props = {};

const Services = (props: Props) => {
  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div className='text-white ml-16 sm:w-4/5 sm:h-auto justify-center flex items-center  p-4'>
      <section className=' mt-14'>
        <animated.p
          style={fadeAnimation}
          className='text-[25rem] text-[#3a3a3a79] font-thin'
        >
          &#123;
        </animated.p>
      </section>

      <section className='ml-8 flex items-center flex-col gap-8 '>

        <h1 className='text-3xl mb-8'>Serviços<span className='text-[#21d19f] text-2xl'> .</span></h1>
        <section className='flex gap-2'>

          <article className='gap-4 flex flex-col bg-[#080808] p-4 rounded-sm w-60 border border-black hover:border-green-300 transition-all duration-500 ease-in delay-150 article-animation'>
            <span className='text-5xl folder rounded-sm'>
              <LuFolderGit2 />
            </span>
            <h1 className='cursor-default font-extrabold'>
              Desenvolvimento
              <span
                className='text-[#21d19f] text-2xl
          '
              >
                .
              </span>
            </h1>
            <p>
              Desenvolvo sites profissionais, blogs, portfólios, landing pages e
              e-commerce
            </p>
          </article>

          <article className='gap-4 flex flex-col bg-[#080808] p-4 rounded-sm w-60 border border-black hover:border-green-300 transition-all duration-500 ease-in delay-150 article-animation'>
            <span className='text-5xl folder rounded-sm'>
              <HiOutlineDeviceMobile />
            </span>
            <h1 className='cursor-default font-extrabold'>
              Montion
              <span
                className='text-[#21d19f] text-2xl
          '
              >
                .
              </span>
            </h1>
            <p>
            Crie engajamento com abordagens que emanem modernidade, cativando o usuário por meio de interações arrojadas e inovadoras
            </p>
          </article>

          <article className='gap-4 flex flex-col bg-[#080808] p-4 rounded-sm w-60 border border-black hover:border-green-300 transition-all duration-500 ease-in delay-150 article-animation'>
            <span className='text-5xl folder rounded-sm font-thin'>
              <TiDeviceDesktop />
            </span>
            <h1 className='cursor-default font-extrabold'>
              Analista de sistema
              <span
                className='text-[#21d19f] text-2xl
          '
              >
                .
              </span>
            </h1>
            <p>
            Como analista de sistemas, refine a arquitetura digital com soluções que sejam vanguardistas, capturando a atenção dos usuários e otimizando suas experiências.
            </p>
          </article>

        </section>
      </section>
    </div>
  );
};

export default Services;
