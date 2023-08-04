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
    <div className='text-white justify-center flex items-center  h-full max-ipad:w-full max-tablet:w-full '>
      <section className=' mt-14 max-ipad:hidden'>
        <animated.p
          style={fadeAnimation}
          className='text-[25rem] max-ipad:text-[15rem] text-[#3a3a3a79] font-thin'
        >
          &#123;
        </animated.p>
      </section>

      <section className='ml-8 max-ipad:ml-0 max-ipad:w-full max-ipad:h-full  max-ipad:flex max-ipad:justify-center flex max-ipad:items-center items-center flex-col gap-8 max-tablet:gap-0 max-ipad:gap-8 max-tablet:w-full max-tablet:ml-0'>
        <h1 className='text-3xl mb-8 max-ipad:mb-0 max-tablet:text-2xl max-tablet:my-2 max-smiphone:my-3 max-smiphone:text-lg'>Serviços<span className='text-[#21d19f] text-2xl'> .</span></h1>
        <section className='flex gap-2 max-ipad:w-full max-smiphone:gap-1 max-smiphone:flex-col'>
          <article className='gap-4 flex flex-col bg-[#080808] p-4 max-tablet:p-2 rounded-sm w-60 max-smiphone:w-full border border-black hover:border-green-300 transition-all duration-500 ease-in delay-150 article-animation max-smiphone:gap-2 max-smiphone:flex-row'>
            <span className='text-5xl folder rounded-sm max-tablet:text-3xl max-smiphone:text-xl max-smiphone:flex max-smiphone:items-center max-smiphone:flex-col-reverse max-smiphone:flex-auto max-smiphone:w-1/4 max-smiphone:justify-center'>
            <h1 className='cursor-default font-extrabold max-tablet:text-[10px] smiphone:hidden'>
              Desenvolver
              <span
                className='text-[#21d19f] text-2xl  max-tablet:text-xl max-smiphone:text-xs
          '
              >
                .
              </span>
            </h1>
              <LuFolderGit2 />
            </span>
            <h1 className='cursor-default font-extrabold max-tablet:text-[10px] flex max-smiphone:hidden'>
              Desenvolvimento
              <span
                className='text-[#21d19f] text-2xl  max-tablet:text-xl max-smiphone:text-xs
          '
              >
                .
              </span>
            </h1>
            <p className='max-ipad:break-all max-ipad:text-justify max-ipad:inset-0 max-smiphone:text-xs max-smiphone:flex max-smiphone:flex-auto max-smiphone:w-3/4'>
              Desenvolvo sites profissionais, blogs, portfólios, landing pages e
              e-commerce
            </p>
          </article>

          <article className=' gap-4 flex flex-col bg-[#080808] p-4 max-tablet:p-2  rounded-sm w-60 max-smiphone:w-full max-smiphone:flex-row border border-black hover:border-green-300 transition-all duration-500 ease-in delay-150 article-animation max-smiphone:gap-2'>
            <span className='text-5xl folder rounded-sm max-tablet:text-3xl max-smiphone:text-xl max-smiphone:flex-auto max-smiphone:w-1/4 max-smiphone:flex max-smiphone:flex-col max-smiphone:items-center'>
            <h1 className='cursor-default font-extrabold max-tablet:text-xs smiphone:hidden'>
              Montion
              <span
                className='text-[#21d19f] text-2xl  max-tablet:text-xl
          '
              >
                .
              </span>
            </h1>
              <HiOutlineDeviceMobile />
            </span>
            <h1 className='cursor-default font-extrabold max-tablet:text-xs max-smiphone:hidden'>
              Montion
              <span
                className='text-[#21d19f] text-2xl  max-tablet:text-xl
          '
              >
                .
              </span>
            </h1>
            <p  className='max-ipad:break-all max-ipad:text-justify max-ipad:inset-0 max-smiphone:text-xs max-smiphone:flex-auto max-smiphone:w-9/12'>
            Crie engajamento com abordagens que emanem modernidade, cativando o usuário por meio de interações arrojadas e inovadoras
            </p>
          </article>

          <article className='gap-4 flex flex-col bg-[#080808] p-4 max-tablet:p-2  rounded-sm w-60 max-smiphone:w-full max-smiphone:flex-row border border-black hover:border-green-300 transition-all duration-500 ease-in delay-150 article-animation max-smiphone:gap-2'>
            <span className='text-5xl folder rounded-sm font-thin max-tablet:text-3xl max-smiphone:text-xl max-smiphone:flex max-smiphone:flex-col max-smiphone:items-center max-smiphone:flex-auto max-smiphone:w-1/4 max-smiphone:justify-center max-smiphone:text-center'>
            <h1 className='cursor-default font-extrabold max-tablet:text-xs  smiphone:hidden'>
              Analista de sistema
              <span
                className='text-[#21d19f] text-2xl max-tablet:text-xl'
              >
                .
              </span>
            </h1>
              <TiDeviceDesktop />
            </span>
            <h1 className='cursor-default font-extrabold max-tablet:text-xs  max-smiphone:hidden smiphone:visible'>
              Analista de sistema
              <span
                className='text-[#21d19f] text-2xl max-tablet:text-xl'
              >
                .
              </span>
            </h1>
            <p  className='max-ipad:break-all max-ipad:text-justify max-ipad:inset-0 max-smiphone:text-xs max-smiphone:flex-auto max-smiphone:w-3/4'>
            Como analista de sistemas, refine a arquitetura digital com soluções que sejam vanguardistas, capturando a atenção dos usuários e otimizando suas experiências.
            </p>
          </article>

        </section>
      </section>
    </div>
  );
};

export default Services;
